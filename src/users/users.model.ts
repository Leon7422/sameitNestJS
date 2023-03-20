import { Profile } from "./../profiles/profiles.model";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import {
  Model,
  DataType,
  Table,
  Column,
  BelongsTo,
  HasOne,
  ForeignKey,
} from "sequelize-typescript";

interface UserCrationAttrs {
  username: string;
  email: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCrationAttrs> {
  @ApiProperty({ example: "1", description: "Унікальний ідентифікатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: "Tommy Vercetti",
    description: "Нікнейм користувача",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username: string;
  @ApiProperty({
    example: "email@gmail.com",
    description: "Емейл користувача",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: "user",
    description: "Роль користувача (user або admin)",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "user",
  })
  role: string;

  @ApiProperty({
    example: "1",
    description: "ID профайлу",
  })
  @ForeignKey(() => Profile)
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  profileId: number;

  @BelongsTo(() => Profile)
  profile: Profile;
}
