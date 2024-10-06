import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Teacher } from './teacher.model';
import { CreateTeacherDto, FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher)
    private readonly teacherModel: typeof Teacher,
  ) {}

  async getAllTeachers(): Promise<FindTeacherResponseDto[]> {
    const teachers = await this.teacherModel.findAll();
    return teachers.map((teacher) => ({
      id: teacher.id,
      name: teacher.name,
      subject: teacher.subject,
    }));
  }

  async getTeacherById(id: number): Promise<FindTeacherResponseDto> {
    const teacher = await this.teacherModel.findByPk(id);
    if (!teacher) {
      throw new Error('Teacher not found');
    }
    return {
      id: teacher.id,
      name: teacher.name,
      subject: teacher.subject,
    };
  }

  async createTeacher(
    createTeacherDto: CreateTeacherDto,
  ): Promise<FindTeacherResponseDto> {
    const teacher = await this.teacherModel.create(createTeacherDto);
    return {
      id: teacher.id,
      name: teacher.name,
      subject: teacher.subject,
    };
  }

  async deleteTeacher(id: number): Promise<FindTeacherResponseDto> {
    const teacher = await this.teacherModel.findByPk(id);
    if (!teacher) {
      throw new Error('Teacher not found');
    }
    await teacher.destroy();
    return {
      id: teacher.id,
      name: teacher.name,
      subject: teacher.subject,
    };
  }
}