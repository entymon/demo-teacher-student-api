import { Sequelize } from 'sequelize-typescript';
import { Student } from 'src/student/student.model';
import { Teacher } from 'src/teacher/teacher.model';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  models: [Student, Teacher],
});

const teachers = [
  { id: 1, name: 'Alice Johnson', subject: 'Math' },
  { id: 2, name: 'Bob Brown', subject: 'Science' },
];

const students = [
  { id: 1, name: 'John Doe', age: 20, teacherId: 1 },
  { id: 2, name: 'Jane Smith', age: 22, teacherId: 2 },
  { id: 3, name: 'Emily Davis', age: 21, teacherId: 1 },
];

async function seed() {
  await sequelize.sync({ force: true });

  await Teacher.bulkCreate(teachers);
  await Student.bulkCreate(students);

  console.log('Database seeded successfully');
  await sequelize.close();
}

seed().catch((error) => {
  console.error('Failed to seed database:', error);
});