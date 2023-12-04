import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = '02-basessss mmmmm11 212 21sssssss33s';
  public counter: number = 10;

  increaseBy( value:number ): void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}
