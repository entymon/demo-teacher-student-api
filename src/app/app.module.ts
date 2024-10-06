import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from 'src/student/student.model';
import { StudentModule } from 'src/student/student.module';
import { Teacher } from 'src/teacher/teacher.model';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'database.sqlite',
      models: [Student, Teacher],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Student, Teacher]),
    TeacherModule,
    StudentModule,
  ],
})
export class AppModule {}
