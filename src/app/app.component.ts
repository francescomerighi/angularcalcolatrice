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
    var lastChar: string = this.espressione.substr(this.espressione.length - 1, this.espressione.length)
    this.espressione = this.espressione + valore;
    if (this.doppioOperatore(valore) && this.doppioOperatore(lastChar)) {
      valore = ""
    }
    this.espressione += valore;
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
