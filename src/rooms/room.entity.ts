import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    @Column({type: 'boolean', default: true })
    isActive: boolean;
}