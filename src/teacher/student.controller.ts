import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class TeacherStudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudentsByTeacherId(
    @Param('teacherId') teacherId: number,
  ): Promise<FindStudentResponseDto[]> {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put(':studentId')
  updateStudentByTeacherId(
    @Param('teacherId') teacherId: number,
    @Param('studentId') studentId: number,
    @Body() studentData: UpdateStudentDto,
  ): Promise<StudentResponseDto> {
    return this.studentService.updateStudentByTeacherId(
      teacherId,
      studentId,
      studentData,
    );
  }
}
