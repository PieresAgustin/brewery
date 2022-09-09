import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BeersService } from './beers.service';
import { CreateBeerDto} from './dto/create-beer.dto'
import { QueryBeersDto } from './dto/query-beers.dto';
import { Beer } from './interfaces/beers.interfaces';

@Controller('beers')
export class BeersController {
  constructor(private readonly beersService: BeersService) {}

  @Get()
  findAll(@Query() query: QueryBeersDto): Beer[] {
    let style = query.style;
    let sortBy = query.sortBy;
    let orderBy = query.orderBy;
    return this.beersService.findAll(style, sortBy, orderBy);
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.beersService.findOne(params.id);
  }

  @Post()
  create (@Body() createBeerDto: CreateBeerDto) {
    return this.beersService.create(createBeerDto);
  }
}
