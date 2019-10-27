import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonsComponent } from './persons/persons.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { MainEntryComponent} from './main-entry/main-entry.component';
import { HttpClientModule }    from '@angular/common/http';
import { SwapiService } from './swapi.service';


const routes: Routes = [
        { path: '', component: MainEntryComponent },
        { path: 'persons/:id', component: PersonDetailsComponent },
        { path: 'persons', component: PersonsComponent },
        { path: 'species', component: SpeciesComponent },
        { path: 'vehicles', component: VehiclesComponent },
        { path: 'vehicles/:id', component: VehicleDetailsComponent },
        { path: 'spaceships', component: StarshipsComponent },
        { path: 'spaceships/:id', component: StarshipDetailsComponent }
      ];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent, PersonDetailsComponent, PersonsComponent, SpeciesComponent, VehiclesComponent, StarshipsComponent, StarshipDetailsComponent, VehicleDetailsComponent, MainEntryComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ RouterModule ],
  providers: [SwapiService]
})
export class AppModule { }
