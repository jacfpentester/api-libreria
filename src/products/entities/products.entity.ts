import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {unique:true})
    nombre:string;

    @Column('text', {nullable:true})
    descripcion:string;
    @Column('text', {nullable:true})
    precio:number
}
