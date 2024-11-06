import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { StudentRepository } from 'src/student/student.repository';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  constructor(private readonly studentRepository: StudentRepository) {}
  // query student by id quickFix

  async use(req: Request, res: Response, next: NextFunction) {
    const { studentId } = req.params;
    // add extra change comment
    const student = await this.studentRepository.findByPk(parseInt(studentId));
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    // change 2 to student.id
    // change 1
    next();
  }
}
