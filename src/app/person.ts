import { Specie } from './specie';
import { Vehicle } from './vehicle';
import { Starship } from './starship';

export class Person {
    id:number;
    name:string;
    gender:string;
    birth_year:string;
    homeworld:string;
    species:Specie[];
    vehicles:Vehicle[];
    starships:Starship[];
    created:string;
}