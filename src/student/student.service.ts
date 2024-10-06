import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import {
  CreateStudentDto,
  UpdateStudentDto,
  StudentResponseDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async findAll(): Promise<StudentResponseDto[]> {
    const students = await this.studentRepository.findAll();
    return students.map((student) => ({
      id: student.id,
      name: student.name,
      age: student.age,
      teacherId: student.teacherId,
    }));
  }

  async findOne(id: number): Promise<StudentResponseDto> {
    const student = await this.studentRepository.findByPk(id);
    if (!student) {
      throw new Error('Student not found');
    }
    return {
      id: student.id,
      name: student.name,
      age: student.age,
      teacherId: student.teacherId,
    };
  }

  async create(
    createStudentDto: CreateStudentDto,
  ): Promise<StudentResponseDto> {
    const student = await this.studentRepository.create(createStudentDto);
    return {
      id: student.id,
      name: student.name,
      age: student.age,
      teacherId: student.teacherId,
    };
  }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<StudentResponseDto> {
    const student = await this.studentRepository.update(id, updateStudentDto);
    if (!student) {
      throw new Error('Student not found');
    }
    return {
      id: student.id,
      name: student.name,
      age: student.age,
      teacherId: student.teacherId,
    };
  }

  async getStudentsByTeacherId(
    teacherId: number,
  ): Promise<StudentResponseDto[]> {
    const students = await this.studentRepository.findAllByTeacherId(teacherId);
    return students.map((student) => ({
      id: student.id,
      name: student.name,
      age: student.age,
      teacherId: student.teacherId,
    }));
  }

  async updateStudentByTeacherId(
    teacherId: number,
    studentId: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<StudentResponseDto> {
    const student = await this.studentRepository.findOneByTeacherId(
      teacherId,
      studentId,
    );
    if (!student) {
      throw new Error('Student not found');
    }
    await student.update(updateStudentDto);
    return {
      id: student.id,
      name: student.name,
      age: student.age,
      teacherId: student.teacherId,
    };
  }
}
