export class CreateStudentDto {
  readonly name: string;
  readonly teacherId: number;
  readonly age: number;
}

export class UpdateStudentDto {
  readonly name?: string;
  readonly teacherId?: number;
  readonly age?: number;
}

export class FindStudentResponseDto {
  readonly id: number;
  readonly name: string;
  readonly teacherId: number;
  readonly age: number;
}

export class StudentResponseDto {
  readonly id: number;
  readonly name: string;
  readonly teacherId: number;
  readonly age: number;
}
