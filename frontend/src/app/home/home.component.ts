import { Component } from '@angular/core';
import {DemoService} from "../demo.service";
import {first} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private demoService: DemoService) { }

  ngOnInit() {

  }

  demo() {
    this.demoService.demo()
      .then(response => {
        console.log(response);
      })
  }
}
