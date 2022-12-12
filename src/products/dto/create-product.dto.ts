import { IsIn, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    id: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    descripcion: string;

    @IsNumber()
    @MinLength(1)
    precio: number;
}
