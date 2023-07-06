import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mis tareas';
  tasks: string[];

  error: boolean;
  error_message: string;

  constructor() {
    this.error = false;
    this.tasks = []
    this.error_message = ''
  }


  agregar(value: string) {

    let nombre =  value ?? ''

    if (!nombre){
      this.error = true;
      this.error_message = 'Verifique el texto ingresado'
    }else{

      this.tasks.push(value)

    }
  }
}
