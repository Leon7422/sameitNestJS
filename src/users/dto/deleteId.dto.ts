import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class DeleteUserDto {
  @ApiProperty({
    example: "1",
    description: "ID користувача якого необхідно видалити",
  })
  readonly id: number;
}
