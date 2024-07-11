import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @Length(2, 50)
    readonly name: string;

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    readonly phone: string;

    @IsString()
    readonly password: string;
}
