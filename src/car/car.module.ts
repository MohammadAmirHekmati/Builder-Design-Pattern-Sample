import { Module } from '@nestjs/common';
import { CarService } from './service/car.service';
import { CarController } from './controller/car.controller';

@Module({
providers:[CarService],
  controllers:[CarController]
})
export class CarModule {}
