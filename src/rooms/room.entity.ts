import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    number: string;

    @ApiProperty()
    @Column()
    capacity: number;

    @ApiProperty()
    @Column()
    level: number;

    @ApiProperty()
    @Column({ default: true })
    isActive: boolean;
}