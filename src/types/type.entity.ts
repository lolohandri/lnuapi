import { ApiProperty } from "@nestjs/swagger";
import { Category } from "src/category/category.entity";
import { Room } from "src/rooms/room.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Types'})
export class Type{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({type: 'varchar', length: 100})
    name: string;

    @ManyToOne(() => Category, category => category.types, {onDelete : 'SET NULL'})
    category: Category;

    @ManyToMany(() => Room, (room) => room.types)
    @JoinTable()
    rooms: Room[];
}