import { ApiProperty } from "@nestjs/swagger";
import { Type } from "src/types/type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Category")
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({type: 'varchar', length: 50})
    name: string;

    @OneToMany(() => Type, type => type.category)
    types: Type[];
}