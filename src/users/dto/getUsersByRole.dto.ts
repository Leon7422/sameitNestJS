import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class GetUsersByRoleDto {
  @ApiProperty({
    example: "USER",
    description: "Роль користувача, наприклад: USER, ADMIN, MODERATOR, PIKACHU",
  })
  readonly roleName: string;
}
