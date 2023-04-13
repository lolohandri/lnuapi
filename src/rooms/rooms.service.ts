import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Room } from './room.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomsService extends TypeOrmCrudService<Room> {
    constructor(@InjectRepository(Room) repository) {
        super(repository)
    }
}
