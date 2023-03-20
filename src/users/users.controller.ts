import { DeleteUserDto } from "./dto/deleteId.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./users.model";
import { UsersService } from "./users.service";
import { CreateGeneralDto } from "./dto/create-general.dto";
import { GetUsersByRoleDto } from "./dto/getUsersByRole.dto";
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger/dist";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";

@ApiTags("Користувачі")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Створити користувача" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateGeneralDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Получити всіх користувачів" })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Получити користувачів з певною роллю" })
  @ApiResponse({ status: 200, type: [User] })
  @Get("/role/:roleName")
  getAllByRole(@Param() getUsersByRoleTdo: GetUsersByRoleDto) {
    return this.usersService.getAllUsersByRole(getUsersByRoleTdo);
  }

  @ApiOperation({ summary: "Оновити інформацію про користувача" })
  @ApiResponse({ status: 200, type: User })
  @Patch("/update")
  updateUserInfo(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUserInfo(updateUserDto);
  }

  @ApiOperation({ summary: "Видалити користувача" })
  @ApiResponse({ status: 204, type: User })
  @Delete("/:id")
  deleteUser(@Param() deleteUserDto: DeleteUserDto) {
    return this.usersService.deleteUser(deleteUserDto.id);
  }
}
