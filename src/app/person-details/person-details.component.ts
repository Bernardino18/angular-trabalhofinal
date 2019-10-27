import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  idPerson: number;
  selectedPerson: Person;

  constructor(private route: ActivatedRoute, private swapiService: SwapiService){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.idPerson = +params.get('id'));
    console.log(this.idPerson);
    if(this.idPerson > 0) {
this.swapiService.getPersonById(this.idPerson).subscribe(people => this.selectedPerson = people);
    }
    
  }
}