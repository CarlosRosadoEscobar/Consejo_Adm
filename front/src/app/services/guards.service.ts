import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  constructor() { }

  getAuthToke(): Observable<boolean>{
    return of(true)
  }

}

