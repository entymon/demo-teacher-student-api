import { Injectable } from '@nestjs/common';
import { TeacherRepository } from './teacher.repository';
import { CreateTeacherDto, FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  constructor(private readonly teacherRepository: TeacherRepository) {}

  async getAllTeachers(): Promise<FindTeacherResponseDto[]> {
    const teachers = await this.teacherRepository.findAll();
    return teachers.map((teacher) => ({
      id: teacher.id,
      name: teacher.name,
      subject: teacher.subject,
    }));
  }

  async getTeacherById(id: number): Promise<FindTeacherResponseDto> {
    const teacher = await this.teacherRepository.findByPk(id);
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
    const teacher = await this.teacherRepository.create(createTeacherDto);
    return {
      id: teacher.id,
      name: teacher.name,
      subject: teacher.subject,
    };
  }

  async deleteTeacher(id: number): Promise<FindTeacherResponseDto> {
    const teacher = await this.teacherRepository.findByPk(id);
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
