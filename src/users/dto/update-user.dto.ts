import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class UpdateUserDto {
  @ApiProperty({
    example: "1",
    description: "ID користувача",
  })
  readonly id: number;

  @ApiProperty({
    example: "Tommy Vercetti",
    description: "Нікнейм користувача",
  })
  readonly username?: string;

  @ApiProperty({
    example: "email@gmail.com",
    description: "Емейл користувача",
  })
  readonly email?: string;

  @ApiProperty({
    example: "email@gmail.com",
    description: "Емейл користувача",
  })
  readonly role?: string;

  @ApiProperty({
    example: "Tommy",
    description: "Ім'я",
  })
  readonly firstName?: string;

  @ApiProperty({
    example: "Vercetti",
    description: "Прізвище",
  })
  readonly lastName?: string;

  @ApiProperty({
    example: "Male",
    description: "Стать",
  })
  readonly state?: string;
}
