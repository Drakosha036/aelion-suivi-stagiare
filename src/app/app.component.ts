import { Component } from '@angular/core';

//decorateur - design pattern, sert ajouter dynamiquent le comportement a une classe
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Attributs de classe
  private title = 'Hello Angular 13!';

  public intern : any = {
    name: 'Aubert',
    firstname: 'Jean-Luc',
    phoneNumber: '(+33)6 23 25 58 87',
    email: 'jla.webprojet@gmail.com'
  }

  public getTitle() : string {
    return this.title;
  }
}
