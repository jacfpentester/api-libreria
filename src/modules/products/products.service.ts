import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/products.entity';


@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {

  }

async create(createProductDto: CreateProductsDto) { 
try {
//crea la instancia del producto con sus propiedades
const producto = this.productsRepository.create(createProductDto);
// Lo graba e impacta en la BD
await this.productsRepository.save(producto);
return producto;
} catch (error) {
console.log(error);
throw new InternalServerErrorException('Ayuda!')
}
}

  findAll() {
    return this.productsRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductsDto: UpdateProductsDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
