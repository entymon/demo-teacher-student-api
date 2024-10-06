import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';
import { StudentRepository } from './student.repository';
import { StudentService } from './student.service';

@Module({
  imports: [SequelizeModule.forFeature([Student])],
  providers: [StudentService, StudentRepository],
  exports: [StudentService, StudentRepository],
})
export class StudentModule {}
