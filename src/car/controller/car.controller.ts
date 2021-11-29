import { Body, Controller, Post } from '@nestjs/common';
import { Car } from '../car';
import { CarService } from '../service/car.service';
import { CreateCarDto } from '../dto/create-car.dto';

@Controller('car')
export class CarController {
  constructor(private carService:CarService) {
  }

  @Post('create')
  createCar(@Body() car:CreateCarDto)
  {
    return this.carService.createCar(car)
  }
}