import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';

import { CreateTeacherDto, FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getAllTeachers(): Promise<FindTeacherResponseDto[]> {
    return await this.teacherService.getAllTeachers();
  }

  @Get(':id')
  async getTeacherById(
    @Param('id') id: number,
  ): Promise<FindTeacherResponseDto> {
    return this.teacherService.getTeacherById(id);
  }

  @Post()
  async createTeacher(
    @Body() teacherData: CreateTeacherDto,
  ): Promise<FindTeacherResponseDto> {
    return this.teacherService.createTeacher(teacherData);
  }

  @Delete(':id')
  async deleteTeacher(
    @Param('id') id: number,
  ): Promise<FindTeacherResponseDto> {
    return this.teacherService.deleteTeacher(id);
  }
}
