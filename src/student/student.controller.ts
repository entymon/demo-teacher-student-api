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

  @Get(':id')
  async getStudentById(
    @Param('id') id: number,
  ): Promise<FindStudentResponseDto> {
    return this.studentService.findOne(id);
  }

  @Post()
  async createStudent(
    @Body() studentData: CreateStudentDto,
  ): Promise<FindStudentResponseDto> {
    const newStudent = await this.studentService.create(studentData);
    return newStudent;
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: number,
    @Body() studentData: UpdateStudentDto,
  ): Promise<StudentResponseDto> {
    return this.studentService.update(id, studentData);
  }
}
