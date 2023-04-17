import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Type } from './type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypesService extends TypeOrmCrudService<Type> {
    constructor(@InjectRepository(Type) repository) {
        super(repository)
    }
}
