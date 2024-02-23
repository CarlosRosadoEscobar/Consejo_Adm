import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private userApi   = "http://localhost:3000/usuario"
  // private userApi   = "https://7736-189-203-150-5.ngrok-free.app/usuario"
  private loginApi  = "";
  private LogData   = "";
  private BDDATAaPI = "";

  constructor(
    private htpp: HttpClient,
  ) { }

  public getData() : Observable<any> {
    return this.htpp.get<any>(this.userApi);
  }

}


/*

Ejecutar servicios de datos


*/
