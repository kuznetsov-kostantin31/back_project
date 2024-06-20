import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto{
    @ApiProperty({example: 'Frontend-разработчик', description: 'Название роли'})
    @IsString({message: 'Должно быть строкой'})
    readonly value: string;

    @ApiProperty({example: 'Web-разработка', description: 'Сфера роли'})
    @IsString({message: 'Должно быть строкой'})
    readonly description: string;
}