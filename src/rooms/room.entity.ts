import { ApiProperty } from "@nestjs/swagger";
import { Type } from "src/types/type.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Rooms'})
export class Room{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({type: 'varchar', length: 10})
    number: string;

    @ApiProperty()
    @Column({type: 'integer'})
    capacity: number;

    @ApiProperty()
    @Column({type: 'integer'})
    level: number;

    @ApiProperty()
    @Column({type: 'varchar', length: 100 })
    faculty: string;
        
    @ApiProperty()
    @Column({type: 'boolean', default: false })
    isActive: boolean;

    @ManyToMany(() => Type, type => type.rooms)
    types: Type[];
}