import { DeleteUserDto } from "./dto/deleteId.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { GetUsersByRoleDto } from "./dto/getUsersByRole.dto";
import { Profile } from "./../profiles/profiles.model";
import { CreateGeneralDto } from "./dto/create-general.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateProfileDto } from "src/profiles/dto/create-profile.dto";
import { User } from "./users.model";
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(Profile) private profileRepository: typeof Profile
  ) {}

  async createUser(dto: CreateGeneralDto) {
    const { username, email, role, firstName, lastName, state } = dto;
    console.log(username, email, role, firstName, lastName, state);

    const userDto: CreateUserDto = {
      username,
      email,
      role,
    };

    const profileDto: CreateProfileDto = {
      firstName,
      lastName,
      state,
    };

    const user = await this.userRepository.create(userDto);
    const profile = await this.profileRepository.create(profileDto);
    await user.$set("profile", profile.id);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getAllUsersByRole(dto: GetUsersByRoleDto) {
    const { roleName } = dto;
    return await this.userRepository.findAll({
      where: {
        role: roleName,
      },
    });
  }

  async updateUserInfo(dto: UpdateUserDto) {
    const { id, username, email, role, firstName, lastName, state } = dto;

    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new HttpException(
        `User with id: ${id} NOT FOUND`,
        HttpStatus.NOT_FOUND
      );
    }

    if (username) user.username = username;
    if (email) user.email = email;
    if (role) user.role = role;

    await user.save();

    if (firstName || lastName || state) {
      const profile = await this.profileRepository.findByPk(user.profileId);

      if (firstName) profile.firstName = firstName;
      if (lastName) profile.lastName = lastName;
      if (state) profile.state = state;

      await profile.save();
    }

    return await this.userRepository.findByPk(id, { include: { all: true } });
  }

  async deleteUser(id: number) {
    console.log(id);
    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new HttpException(
        `User with id: ${id} NOT FOUND`,
        HttpStatus.NOT_FOUND
      );
    }
    await User.destroy({ where: { id } });
    await Profile.destroy({ where: { id: user.profileId } });

    return `The user with id: ${id} has been deleted.`;
  }
}
