import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Specie } from './specie';
import { Vehicle } from './vehicle';
import { Starship } from './starship';
import { Person } from './person';

@Injectable()
export class SwapiService {
  private apiUrl = 'https://swapi.co/api/';
  private ending = '&format=json';
  private ending2 = '?format=json';
  private ended = false;
 constructor(private http:HttpClient) { 
  }

  getPeople(page): Observable<Person[]> {
    return this.http
    .get<Person[]>(this.apiUrl + 'people/?page='+page+this.ending);
  }
  getSpecies(page): Observable<Specie[]> {
    return this.http
    .get<Specie[]>(this.apiUrl + 'species/?page='+page+this.ending);
  }
  getVehicles(page): Observable<Vehicle[]> {
    return this.http
    .get<Vehicle[]>(this.apiUrl + 'vehicles/?page='+page+this.ending);
  }
  getStarShips(page): Observable<Starship[]> {
    return this.http.get<Starship[]>(this.apiUrl + 'starships/?page='+page+this.ending);
  }
  getPersonById(id:number): Observable<Person> {   
    return this.http.get<Person>(this.apiUrl + 'people/'+id+ this.ending2);

  }
  getStarshipById(id:number): Observable<Starship> {     
    return this.http.get<Starship>(this.apiUrl + 'starships/'+id+ this.ending2);
  }
  getVehiclesById(id:number): Observable<Vehicle> {     
    return this.http.get<Vehicle>(this.apiUrl + 'vehicles/'+id+ this.ending2);
  }
  getPeopleByName(name:string) : Observable<Person[]> {
    return this.http.get<Person>(this.apiUrl + 'people/?search='+name+ this.ending2);
  }
  getStartShipsByName(name:string) : Observable<Starship[]> {
    return this.http.get<Starship>(this.apiUrl + 'starships/?search='+name+ this.ending2);
  }
  getVehiclesByName(name:string) : Observable<Vehicle[]> {
    return this.http.get<Starship>(this.apiUrl + 'vehicles/?search='+name+ this.ending2);
  }
}