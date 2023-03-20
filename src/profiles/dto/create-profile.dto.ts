import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class CreateProfileDto {
  @ApiProperty({
    example: "Tommy",
    description: "Ім'я",
  })
  readonly firstName: string;

  @ApiProperty({
    example: "Vercetti",
    description: "Прізвище",
  })
  readonly lastName: string;

  @ApiProperty({
    example: "Male",
    description: "Стать",
  })
  readonly state: string;
}
