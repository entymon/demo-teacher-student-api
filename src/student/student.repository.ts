import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './student.model';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectModel(Student)
    private readonly studentModel: typeof Student,
  ) {}

  async findAll() {
    return this.studentModel.findAll();
  }

  async findByPk(id: number) {
    return this.studentModel.findByPk(id);
  }

  async create(studentData: any) {
    return this.studentModel.create(studentData);
  }

  async update(id: number, studentData: any) {
    const student = await this.studentModel.findByPk(id);
    if (student) {
      return student.update(studentData);
    }
    return null;
  }

  async findAllByTeacherId(teacherId: number) {
    return this.studentModel.findAll({ where: { teacherId } });
  }

  async findOneByTeacherId(teacherId: number, studentId: number) {
    return this.studentModel.findOne({ where: { id: studentId, teacherId } });
  }
}