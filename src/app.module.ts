import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/room.entity';
import { TypesModule } from './types/types.module';
import { CategoryModule } from './category/category.module';
import { Type } from './types/type.entity';
import { Category } from './category/category.entity';
import { ConfigModule } from '@nestjs/config';
import { env } from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DATABASE_HOST,
      port: parseInt(<string>env.DATABASE_PORT),
      username: env.DATABASE_USER,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_DATABASE,
      entities: [Room, Type, Category],
      synchronize: true,
    }),
    RoomsModule,
    TypesModule,
    CategoryModule,
  ],
})
export class AppModule { }
