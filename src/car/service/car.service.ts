import { Body, Injectable } from '@nestjs/common';
import { Car } from '../car';
import { CarBuilder } from '../builder/class/car-builder';
import { CreateCarDto } from '../dto/create-car.dto';

@Injectable()
export class CarService {

  createCar(car:CreateCarDto)
  {
    let buildCar=new CarBuilder()
      .setEngineModel(car.engineModel)
      .haveGps(car.haveGps)
      .setSeatsNumber(car.seatsNumber)
      .haveComputer(car.haveComputer)
      .haveSpareTire(car.haveSpareTire)
      .setCarName(car.carName)
      .setYearCreated(car.yearCreated)
      .builder()
    return buildCar
  }

}