const { execSync } = require('child_process')

try {
  console.log('Running Prisma migrations...')
  execSync('npx prisma migrate deploy', { stdio: 'inherit' })
  console.log('Prisma migrations completed successfully.')

  console.log('Running database seed...')
  execSync('pnpm run seed', { stdio: 'inherit' })
  console.log('Database seed completed successfully.')
} catch (err) {
  console.error('Error during Prisma initialization:', err.stack)
  process.exit(1) // Failure
}
