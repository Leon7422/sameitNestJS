import { User } from "./../users/users.model";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import {
  Model,
  DataType,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  HasOne,
} from "sequelize-typescript";

interface ProfileCrationAttrs {
  firstName: string;
  lastName: string;
  state: string;
}

@Table({ tableName: "profiles" })
export class Profile extends Model<Profile, ProfileCrationAttrs> {
  @ApiProperty({ example: "1", description: "Унікальний ідентифікатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Tommy",
    description: "Ім'я користувача",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @ApiProperty({
    example: "Vercetti",
    description: "Прізвище користувача",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @ApiProperty({
    example: "male",
    description: "Стать користувача",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @HasOne(() => User)
  user: User;
}
