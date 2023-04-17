import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Types'})
export class Type{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({type: 'varchar', length: 100})
    name: string;

    @ApiProperty()
    @Column({type: 'integer'})
    categoryId: number;
}