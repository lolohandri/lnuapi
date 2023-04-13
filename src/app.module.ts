import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/room.entity';
import { TypesModule } from './types/types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senseye3LED',
      database: 'university',
      entities: [Room],
      synchronize: true,
    }),
    RoomsModule,
    TypesModule,
  ],
})
export class AppModule { }
