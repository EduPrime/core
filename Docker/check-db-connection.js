const { Client } = require('pg')
const { execSync } = require('child_process')

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
})

client
  .connect()
  .then(async () => {
    console.log('Database connection successful')

    const res = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE  table_schema = '${process.env.POSTGRES_SCHEMA}'
        AND    table_name   = 'Institution'
      );
    `)

    if (!res.rows[0].exists) {
      console.log('Tables not found, initializing Prisma...')
      execSync('node prisma-init.js', { stdio: 'inherit' })
    } else {
      console.log('Tables already exist.')
    }

    process.exit(0) // Success
  })
  .catch((err) => {
    console.error('Database connection failed:', err.stack)
    process.exit(1) // Failure
  })
