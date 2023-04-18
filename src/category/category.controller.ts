import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: {
        type: Category
    }
})

@ApiTags('category')
@Controller('category')
export class CategoryController implements CrudController<Category> {
    constructor(public service: CategoryService) { }
}
