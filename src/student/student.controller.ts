import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getAllStudents(): Promise<FindStudentResponseDto[]> {
    return this.studentService.findAll();
  }

  @Get(':studentId')
  async getStudentById(
    @Param('studentId') studentId: number,
  ): Promise<FindStudentResponseDto> {
    return this.studentService.findOne(studentId);
  }

  @Post()
  async createStudent(
    @Body() studentData: CreateStudentDto,
  ): Promise<FindStudentResponseDto> {
    const newStudent = await this.studentService.create(studentData);
    return newStudent;
  }

  @Put(':studentId')
  async updateStudent(
    @Param('studentId') studentId: number,
    @Body() studentData: UpdateStudentDto,
  ): Promise<StudentResponseDto> {
    return this.studentService.update(studentId, studentData);
  }
}
