import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Type } from './type.entity';
import { TypesService } from './types.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: {
        type: Type
    }
})
@ApiTags('types')
@Controller('types')
export class TypesController implements CrudController<Type> {
    constructor(public service: TypesService) { }
}
