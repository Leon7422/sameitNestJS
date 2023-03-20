import { User } from "./../users/users.model";
import { Profile } from "./profiles.model";
import { Module } from "@nestjs/common";
import { ProfilesService } from "./profiles.service";
import { ProfilesController } from "./profiles.controller";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  providers: [ProfilesService],
  controllers: [ProfilesController],
  imports: [SequelizeModule.forFeature([Profile, User])],
})
export class ProfilesModule {}
