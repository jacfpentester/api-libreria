import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {unique:true})
    nombre:string;

    @Column('text', {nullable:false})
    descripcion:string;

    @Column('text', {nullable:false})
    precio:number
}
