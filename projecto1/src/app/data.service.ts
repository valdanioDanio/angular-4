import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  carros = [
    "Corola","Mandriva", "Jimmy"
  ]

  mydata(){
    return "Estes são os meus dados simples";
  }

}
