import { Component } from '@angular/core';
import {DemoService} from "./demo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(private demoService: DemoService) { }

  demo() {
    this.demoService.demo()
      .then(response => {
        console.log(response);
      })
  }

}
