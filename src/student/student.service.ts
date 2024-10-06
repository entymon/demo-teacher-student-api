import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Student } from './student.model';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student)
    private readonly studentModel: typeof Student,
  ) {}

  async findAll(): Promise<FindStudentResponseDto[]> {
    const students = await this.studentModel.findAll();

    return students.map((student) => ({
      id: student.id,
      name: student.name,
      age: student.age,
      teacherId: student.teacherId,
    }));
  }

  async findOne(id: number): Promise<FindStudentResponseDto> {
    const student = await this.studentModel.findByPk(id);
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
    const student = await this.studentModel.create(createStudentDto);
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
    const student = await this.studentModel.findByPk(id);
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

  async getStudentsByTeacherId(
    teacherId: number,
  ): Promise<StudentResponseDto[]> {
    const students = await this.studentModel.findAll({ where: { teacherId } });
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
    const student = await this.studentModel.findOne({
      where: { id: studentId, teacherId },
    });
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
