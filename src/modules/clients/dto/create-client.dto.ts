import { IsIn, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateClientDto {
    @IsString()
    @MinLength(1)
    id: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    apellidos: string;

    @IsNumber()
    @MinLength(2)
    telefono: number;
}
