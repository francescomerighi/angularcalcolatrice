import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  risultato = "0";
  espressione = "";

  calcola() {
    this.espressione = eval(this.espressione);
  }

  visualizza(valore:string) {
    this.espressione = this.espressione + valore;
  }

  cancella() { 
    this.risultato = "0";
    this.espressione = "";
  }

  invertiSegno() {
    this.espressione = "-" + this.espressione;
  }

  doppioOperatore(char: string) {
    return char == "+" || char == "-" || char == "x" || char == "/" ? true : false;
  }
}
