export interface ICarBuilder {

  reset()

  setCarName(carName:string)

  setSeatsNumber(seatsNumber:number)

  setYearCreated(yearCreated:number)

  setEngineModel(engineModel:string)

  haveSpareTire(response:boolean)

  haveGps(response:boolean)

  haveComputer(response:boolean)

  builder()
}