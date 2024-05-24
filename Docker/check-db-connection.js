const { Client } = require('pg')
const { execSync } = require('child_process')

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
})

const waitForDatabase = async (retries) => {
  for (let i = 0; i < retries; i++) {
    try {
      await client.connect()
      console.log('Database connection successful')
      return
    } catch (err) {
      console.log(
        `Database connection failed, retrying... (${i + 1}/${retries})`,
      )
      await new Promise((res) => setTimeout(res, 5000))
    }
  }
  throw new Error('Failed to connect to the database after multiple retries')
}

waitForDatabase(10)
  .then(async () => {
    console.log('Checking if the Institution table exists...')
    const resTable = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE  table_schema = '${process.env.POSTGRES_SCHEMA}'
        AND    table_name   = 'Institution'
      );
    `)

    if (!resTable.rows[0].exists) {
      console.log('Tables not found, initializing Prisma...')
      execSync('node prisma-init.js', { stdio: 'inherit' })
    } else {
      console.log('Tables already exist.')

      console.log('Checking if the Institution table is empty...')
      const resData = await client.query(
        `SELECT COUNT(*) FROM "${process.env.POSTGRES_SCHEMA}"."Institution";`,
      )
      const count = parseInt(resData.rows[0].count, 10)

      if (count === 0) {
        console.log('Institution table is empty, running seed...')
        try {
          execSync('pnpm run seed', { stdio: 'inherit' })
          console.log('Seed completed successfully.')
        } catch (seedErr) {
          console.error('Error during seeding:', seedErr)
        }
      } else {
        console.log('Institution table is already populated.')
      }
    }

    process.exit(0) // Success
  })
  .catch((err) => {
    console.error('Database connection failed:', err.stack)
    process.exit(1) // Failure
  })
