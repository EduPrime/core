import { PrismaClient } from '@prisma/client'
import { seedInstitution } from './seedInstitution'
import { seedGrade } from './seedGrade'

const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Seeding Institution...')
    await seedInstitution()
    console.log('Institution seeded successfully.')

    console.log('Seeding Grade...')
    await seedGrade()
    console.log('Grade seeded successfully.')
  } catch (e) {
    console.error('Error during seeding:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
