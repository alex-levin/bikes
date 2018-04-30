import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import { Bike } from './bike'
import { BIKES } from './bikes-store';

@Injectable()
export class BikeService {

  getBike(id: number): Observable<Bike> {
    return of(BIKES.filter(bike => bike.id === id)[0]);
  }

  constructor() { }

  getBikes(): Observable<Bike[]> {
    // return this.http.get<Hero[]>(this.heroesUrl)
    return of(BIKES);
  }
}