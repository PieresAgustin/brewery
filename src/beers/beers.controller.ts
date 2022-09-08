import { Controller, Get } from '@nestjs/common';
import { BeersService } from './beers.service';


@Controller()
export class BeersController {
  constructor(private readonly appService: BeersService) {}

  @Get('/beers')
  getHello(): string {
    return this.appService.getHello();
  }
}
