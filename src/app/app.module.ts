import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentController } from '../student/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { TeacherStudentController } from 'src/teacher/student.controller';
import { Student } from 'src/student/student.model';
import { Teacher } from 'src/teacher/teacher.model';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'database.sqlite',
      models: [Student, Teacher],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Student, Teacher]),
  ],
  controllers: [StudentController, TeacherController, TeacherStudentController],
  providers: [StudentService, TeacherService],
})
export class AppModule {}
