import { seedInstitution } from './seedInstitution'
import { seedGrade } from './seedGrade'
async function main() {
  await seedInstitution()
  await seedGrade()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    await prisma.$disconnect()
  })
