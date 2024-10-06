import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Student } from 'src/student/student.model';

@Table
export class Teacher extends Model<Teacher> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  subject: string;

  @HasMany(() => Student)
  students: Student[];
}
