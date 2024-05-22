import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seedInstitution() {
  // Create Institution
  const institution = await prisma.institution.create({
    data: {
      name: 'Instituição Educacional Alfa',
      address: 'Rua Principal, 123',
      city: 'Cidade Alfa',
      state: 'Estado Alfa',
      postalCode: '12345-678',
      phone: '(11) 1234-5678',
    },
  })

  const school1 = await prisma.school.create({
    data: {
      name: 'Escola Fundamental Alfa',
      address: 'Avenida Secundária, 456',
      city: 'Cidade Alfa',
      state: 'Estado Alfa',
      postalCode: '12345-678',
      phone: '(11) 8765-4321',
      institutionId: institution.id,
    },
  })

  const school2 = await prisma.school.create({
    data: {
      name: 'Colégio Beta',
      address: 'Rua Terciária, 789',
      city: 'Cidade Beta',
      state: 'Estado Beta',
      postalCode: '98765-432',
      phone: '(21) 2345-6789',
      institutionId: institution.id,
    },
  })

  // Create Courses
  const course1 = await prisma.course.create({
    data: {
      name: 'Ensino Fundamental I',
      schoolId: school1.id,
    },
  })

  const course2 = await prisma.course.create({
    data: {
      name: 'Ensino Médio',
      schoolId: school2.id,
    },
  })

  // Create Series
  const series1 = await prisma.series.create({
    data: {
      name: '1º Ano',
      courseId: course1.id,
    },
  })

  const series2 = await prisma.series.create({
    data: {
      name: '2º Ano',
      courseId: course2.id,
    },
  })

  // Create Classrooms
  const classroom1 = await prisma.classroom.create({
    data: {
      name: 'Turma A',
      period: 'MORNING',
      seriesId: series1.id,
    },
  })

  const classroom2 = await prisma.classroom.create({
    data: {
      name: 'Turma B',
      period: 'AFTERNOON',
      seriesId: series1.id,
    },
  })

  const classroom3 = await prisma.classroom.create({
    data: {
      name: 'Turma C',
      period: 'EVENING',
      seriesId: series2.id,
    },
  })

  // Create Students
  await prisma.student.createMany({
    data: [
      {
        name: 'Ana Silva',
        email: 'ana.silva@example.com',
        classroomId: classroom1.id,
      },
      {
        name: 'Bruno Souza',
        email: 'bruno.souza@example.com',
        classroomId: classroom1.id,
      },
      {
        name: 'Carla Mendes',
        email: 'carla.mendes@example.com',
        classroomId: classroom2.id,
      },
      {
        name: 'Daniel Oliveira',
        email: 'daniel.oliveira@example.com',
        classroomId: classroom2.id,
      },
      {
        name: 'Elaine Costa',
        email: 'elaine.costa@example.com',
        classroomId: classroom3.id,
      },
      {
        name: 'Felipe Lima',
        email: 'felipe.lima@example.com',
        classroomId: classroom3.id,
      },
    ],
  })

  // Create Teachers
  const teacher1 = await prisma.teacher.create({
    data: {
      name: 'Prof. João Pereira',
      email: 'joao.pereira@example.com',
      schoolId: school1.id,
    },
  })

  const teacher2 = await prisma.teacher.create({
    data: {
      name: 'Profª. Maria Fernandes',
      email: 'maria.fernandes@example.com',
      schoolId: school1.id,
    },
  })

  const teacher3 = await prisma.teacher.create({
    data: {
      name: 'Prof. Paulo Santos',
      email: 'paulo.santos@example.com',
      schoolId: school2.id,
    },
  })

  const teacher4 = await prisma.teacher.create({
    data: {
      name: 'Profª. Rita Oliveira',
      email: 'rita.oliveira@example.com',
      schoolId: school2.id,
    },
  })

  // Create Disciplines
  const math = await prisma.discipline.create({
    data: {
      name: 'Matemática',
      teacherId: teacher1.id,
    },
  })

  const science = await prisma.discipline.create({
    data: {
      name: 'Ciências',
      teacherId: teacher2.id,
    },
  })

  const history = await prisma.discipline.create({
    data: {
      name: 'História',
      teacherId: teacher3.id,
    },
  })

  const geography = await prisma.discipline.create({
    data: {
      name: 'Geografia',
      teacherId: teacher4.id,
    },
  })

  // Create Timetables
  const timetable1 = await prisma.timetable.create({
    data: {
      name: 'Horário da Turma A',
      classroomId: classroom1.id,
      teachers: {
        connect: [{ id: teacher1.id }, { id: teacher2.id }],
      },
      classSessions: {
        create: [
          {
            dayOfWeek: 'MONDAY',
            startTime: '08:00',
            endTime: '09:00',
            disciplineId: math.id,
          },
          {
            dayOfWeek: 'TUESDAY',
            startTime: '09:00',
            endTime: '10:00',
            disciplineId: science.id,
          },
        ],
      },
    },
  })

  const timetable2 = await prisma.timetable.create({
    data: {
      name: 'Horário da Turma C',
      classroomId: classroom3.id,
      teachers: {
        connect: [{ id: teacher3.id }, { id: teacher4.id }],
      },
      classSessions: {
        create: [
          {
            dayOfWeek: 'WEDNESDAY',
            startTime: '10:00',
            endTime: '11:00',
            disciplineId: history.id,
          },
          {
            dayOfWeek: 'THURSDAY',
            startTime: '11:00',
            endTime: '12:00',
            disciplineId: geography.id,
          },
        ],
      },
    },
  })

  console.log({
    institution,
    school1,
    school2,
    course1,
    course2,
    series1,
    series2,
    classroom1,
    classroom2,
    classroom3,
    teacher1,
    teacher2,
    teacher3,
    teacher4,
    math,
    science,
    history,
    geography,
    timetable1,
    timetable2,
  })
}
