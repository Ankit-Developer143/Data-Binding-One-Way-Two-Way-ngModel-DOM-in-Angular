import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //or
  styles: [
    `
      h1 {
        color: white;
        background: black;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Basic';
}
