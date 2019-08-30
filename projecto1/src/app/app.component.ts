import { Component } from '@angular/core';
/*
//template
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>Testando todos os componentes</h1>  
  <div *ngIf="coisas; then temp1 else temp2">
      <h2><a target="_blank" rel="noopener">Gosto de Angola</a></h2>
  </div>
  <ng-template #temp1>Olá esta é a estrutura numero 1</ng-template>
  <ng-template #temp2>Olá esta é a estrutura numero 2</ng-template>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projecto1';
   nomes = ["Valdanio","Manuel Simão","Pedro MOniz","Felisberto Joaquim"];
   coisas = true;
}
*/

//propert binding
/*@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>Trabalhando com imagens</h1>  
   <button [disabled]="estadoBotao">CLica então wi</button>
   <button [disabled]="estadoBotao2 == 'maul estado'">CLica 2 então wi</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 // imagem = 'assets/img/img1.jpg';
 estadoBotao = false;
 estadoBotao2 = "maul estado";
}*/

//trabalhando com eventos da visao para o ts
/*@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>Trabalhando com eventos</h1>  
   <button (click)="salvar($event)">Salvar</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  salvar(event){
    console.log(event);
  }

}*/

//estilos css
/* @Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1 [class]="classDoElement">Trabalhando com eventos</h1>  
  <h1 [ngClass]="minhaClasse">Trabalhando com eventos</h1>  
  `,
  //styleUrls: ['./app.component.css']
  styles: [`
  .text-red{
    color:red;
  }
  .tam-classe{
    font-size: 14px;
  }
  `]
})

export class AppComponent {

  classDoElement = 'text-red'
  minhaClasse = {
  "text-red":false,
  "tam-classe": true
  }

}*/

import {DataService} from './data.service';

//trabalhando com serviços
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>{{textoCarregado}}</h1>   
  `,
  //styleUrls: ['./app.component.css']
  styles: []
})

export class AppComponent {

  constructor(private dataService: DataService){}

   textoCarregado:string

  ngOnInit(){
    console.log(this.dataService.carros)
    this.textoCarregado = this.dataService.mydata();
  }
  
}