import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/room.entity';
import { TypesModule } from './types/types.module';
import { CategoryModule } from './category/category.module';
import { Type } from './types/type.entity';
import { Category } from './category/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senseye3LED',
      database: 'university',
      entities: [Room, Type, Category],
      synchronize: true,
    }),
    RoomsModule,
    TypesModule,
    CategoryModule,
  ],
})
export class AppModule { }
