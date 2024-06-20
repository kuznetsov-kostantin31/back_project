import {Column, DataType, Table, Model, BelongsToMany} from "sequelize-typescript";
import {ApiProduces, ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";


interface UserCreationAttrs{
    name: string;
    login: string;
    email: string;
    password: string;
}
@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный айди пользователя'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Александр Довжик', description: 'Имя'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'ausdam', description: 'Логин'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'DFj34-fjkHJKd', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'За экстремизм', description: 'Причина бана'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}