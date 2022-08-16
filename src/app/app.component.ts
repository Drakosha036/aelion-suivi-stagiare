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

  //objet intern qui est cree a partir de la classe Intern
  public intern : Intern = {
    name: 'Aubert',
    firstname: 'Jean-Luc',
    phoneNumber: '(+33)6 23 25 58 87',
    email: 'jla.webprojet@gmail.com'
  }

  public interns: Intern[] = [
    this.intern,
    {
      name: 'Pina',
      firstname: 'Monica',
      phoneNumber: '(+33)6 23 25 58 87',
      email: 'monica@gmail.com'
    },
    {
      name: 'Kostina',
      firstname: 'Sasha',
      phoneNumber: '(+33)6 23 25 58 87',
      email: 'sasha@gmail.com'
    },
    {
      name: 'Marchand',
      firstname: 'Glace',
      phoneNumber: '(+33)6 23 25 58 87',
      email: 'glace@gmail.com'
    }
  ]

  public getTitle() : string {
    return this.title;
  }

  public onDelete(intern: Intern): void {
    console.log('Click was detected');
    //splice remove l'element par l'indexOf element choisi
    this.interns.splice(this.interns.indexOf(intern), 1);
  }
}
