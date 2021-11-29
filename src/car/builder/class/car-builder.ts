import { ICarBuilder } from '../interface/car-builder.interface';
import { Car } from '../../car';

export class CarBuilder implements ICarBuilder{
  constructor() {
    this.reset()
  }
  car:Car

  reset() {
    this.car=new Car()
  }

  haveComputer(response: boolean) {
    this.car.haveComputer=response
    return this
  }

  haveGps(response: boolean) {
    this.car.haveGps=response
    return this
  }

  haveSpareTire(response: boolean) {
    this.car.haveSpareTire=response
    return this
  }

  setCarName(carName: string) {
    this.car.carName=carName
    return this
  }

  setEngineModel(engineModel: string) {
    this.car.engineModel=engineModel
    return this
  }

  setSeatsNumber(seatsNumber: number) {
    this.car.seatsNumber=seatsNumber
    return this
  }

  setYearCreated(yearCreated: number) {
    this.car.yearCreated=yearCreated
    return this
  }

  builder() {
    return this.car
  }

}