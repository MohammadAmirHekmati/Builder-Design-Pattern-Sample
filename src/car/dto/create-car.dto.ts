import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {

  @ApiProperty()
  carName:string

  @ApiProperty()
  seatsNumber:number

  @ApiProperty()
  yearCreated:number

  @ApiProperty()
  engineModel:string

  @ApiProperty()
  haveSpareTire:boolean

  @ApiProperty()
  haveComputer:boolean

  @ApiProperty()
  haveGps:boolean
}