import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma.module'
import { PrismaCrudModule } from 'nestjs-prisma-crud'
import { PrismaService } from './prisma.service'
import { InstitutionModule } from './institution/institution.module';
import { SchoolModule } from './school/school.module';
import { CourseModule } from './course/course.module';
import { SeriesModule } from './series/series.module';
import { ClassroomModule } from './classroom/classroom.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { DisciplineModule } from './discipline/discipline.module';
import { TimetableModule } from './timetable/timetable.module';
import { ClassSessionModule } from './class-session/class-session.module';
import { AttendanceModule } from './attendance/attendance.module';
import { GradeModule } from './grade/grade.module';
@Module({
  imports: [
    PrismaModule,
    PrismaCrudModule.register({
      prismaService: PrismaService,
    }),
    InstitutionModule,
    SchoolModule,
    CourseModule,
    SeriesModule,
    ClassroomModule,
    StudentModule,
    TeacherModule,
    DisciplineModule,
    TimetableModule,
    ClassSessionModule,
    AttendanceModule,
    GradeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
