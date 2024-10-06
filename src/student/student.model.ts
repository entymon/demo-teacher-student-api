import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Teacher } from 'src/teacher/teacher.model';

@Table
export class Student extends Model<Student> {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @ForeignKey(() => Teacher)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  teacherId: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;
}
