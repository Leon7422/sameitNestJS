import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class CreateUserDto {
  @ApiProperty({
    example: "Tommy Vercetti",
    description: "Нікнейм користувача",
  })
  readonly username: string;

  @ApiProperty({
    example: "email@gmail.com",
    description: "Емейл користувача",
  })
  readonly email: string;

  @ApiProperty({
    example: "email@gmail.com",
    description: "Емейл користувача",
  })
  readonly role: string;
}
