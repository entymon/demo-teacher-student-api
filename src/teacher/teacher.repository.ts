import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Teacher } from './teacher.model';

@Injectable()
export class TeacherRepository {
  constructor(
    @InjectModel(Teacher)
    private readonly teacherModel: typeof Teacher,
  ) {}

  async findAll() {
    return this.teacherModel.findAll();
  }

  async findByPk(id: number) {
    return this.teacherModel.findByPk(id);
  }

  async create(teacherData: any) {
    return this.teacherModel.create(teacherData);
  }

  async update(id: number, teacherData: any) {
    const teacher = await this.teacherModel.findByPk(id);
    if (teacher) {
      return teacher.update(teacherData);
    }
    return null;
  }
}