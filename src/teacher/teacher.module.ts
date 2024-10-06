import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeacherController } from './teacher.controller';
import { TeacherStudentController } from './student.controller';
import { TeacherService } from './teacher.service';
import { TeacherRepository } from './teacher.repository';
import { Teacher } from './teacher.model';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [SequelizeModule.forFeature([Teacher]), StudentModule],
  controllers: [TeacherController, TeacherStudentController],
  providers: [TeacherService, TeacherRepository],
})
export class TeacherModule {}
