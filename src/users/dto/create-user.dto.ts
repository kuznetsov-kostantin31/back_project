import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    readonly email: string;

    @ApiProperty({example: 'DFj34-fjkHJKd', description: 'Пароль'})
    readonly password: string;
}