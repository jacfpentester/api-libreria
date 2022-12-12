import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class Clients {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {unique:true})
    nombre:string;

    @Column('text', {nullable:false})
    apellidos:string;

    @Column('text', {nullable:true})
    telefono:number
}
