import { IsIn, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductsDto {
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
    @IsPositive()
    precio: number;
}
