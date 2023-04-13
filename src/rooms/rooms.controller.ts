import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Room } from './room.entity';
import { RoomsService } from './rooms.service';

@Crud({
    model: {
        type: Room
    }
})
@Controller('rooms')
export class RoomsController implements CrudController<Room> {
    constructor(public service: RoomsService) { }
}
