import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';
import { StudentRepository } from './student.repository';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { ValidStudentMiddleware } from 'src/middleware/validStudent.middleware';

@Module({
  imports: [SequelizeModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
  exports: [StudentService, StudentRepository],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.PUT,
    });
  }
}
