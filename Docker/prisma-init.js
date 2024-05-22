const { execSync } = require('child_process')

try {
  console.log('Running Prisma migrations...')
  execSync('npx prisma migrate deploy', { stdio: 'inherit' })
  console.log('Prisma migrations completed successfully.')
} catch (err) {
  console.error('Prisma migrations failed:', err.stack)
  process.exit(1) // Failure
}
