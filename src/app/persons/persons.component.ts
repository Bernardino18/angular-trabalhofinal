import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { SwapiService } from '../swapi.service';
import { PERSONS } from '../images';
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  people: Person[]; 
  persons = PERSONS;
  personSelected: Person;
  constructor(private api: SwapiService) { }

  ngOnInit() {

    this.people = [];
    this.getPeople();
  }

  getPeople(): void {
    let url;
    for(let i = 0; i < 9; i++) {
      this.api.getPeople(i+1).subscribe(dados => {
      for (let i = 0; i < dados.results.length; i++){
                          let person = dados.results[i];
                          person.id = person.url.split('/')[5];
                          this.people.push(person);
      }
      if(typeof dados.next === 'string') {
        url = dados.next;
      }
      });
    }
  }

}