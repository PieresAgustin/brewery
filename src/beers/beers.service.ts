import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { Beer } from './interfaces/beers.interfaces';

@Injectable()
export class BeersService {
 
   private beers: Beer[] = [
    {
        "id":1,
        "name": "IPA mutante",
        "style": "India Pale Ale",
        "stock": 500
    }
   ];

   create (createBeerDto: CreateBeerDto): Beer {
    const newbeer = new Beer(createBeerDto.name, createBeerDto.style, createBeerDto.stock)
    this.beers.push(newbeer);
    return newbeer;
 }

 findAll(style: string, sortBy: string, orderBy: string):Beer[] {
   let queryBeers = [];
    
   //Filtro por estilo
   if (!style){
    queryBeers = this.beers;
   } else {
    queryBeers = this.beers.filter(function(beer){
        return beer.style.toLowerCase == style.toLowerCase;
    });
   }
    if(!sortBy){
        return queryBeers;
    }

   //Orden por nombre
   let orderedBeers = queryBeers.sort(function(a, b){
    let campoAOrdenarA = a[sortBy];
    let campoAOrdenarB = b[sortBy];
    if(campoAOrdenarA < campoAOrdenarB) {
        return -1;
    }
    if(campoAOrdenarA == campoAOrdenarB) {
        return 0;
    }
    return 1;
})

   return queryBeers;
 }

 findOne(id:number): Beer{
    return this.beers.find(function(beer){
        return beer.id == id;
    });
 }
}    

