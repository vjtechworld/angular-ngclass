import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // An array is created with name courseArray
  courseArray = [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    }
  ];

  constructor() { }

  // applying CSS classes using Function
  applyCSSClasses() {
    return {
      'text-success' : true,
      'font-weight-bold' : true
    };
  }
}