import { Component } from '@angular/core';
import { Intern } from './core/models/intern';

//decorateur - design pattern, sert ajouter dynamiquent le comportement a une classe
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Attributs de classe
  private title = 'Hello Angular 13!';

  public intern : Intern = {
    name: 'Aubert',
    firstname: 'Jean-Luc',
    phoneNumber: '(+33)6 23 25 58 87',
    email: 'jla.webprojet@gmail.com'
  }

  public getTitle() : string {
    return this.title;
  }
}
