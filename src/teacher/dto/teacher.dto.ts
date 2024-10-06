export class CreateTeacherDto {
  readonly name: string;
  readonly subject: string;
}

export class UpdateTeacherDto {
  readonly name?: string;
  readonly subject?: string;
}

export class FindTeacherResponseDto {
  readonly id: number;
  readonly name: string;
  readonly subject: string;
}

export class TeacherResponseDto {
  readonly id: number;
  readonly name: string;
  readonly subject: string;
}
