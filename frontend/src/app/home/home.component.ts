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
    this.demoService.demo()
      .pipe(first())
      .subscribe((resp) => {
        console.log(resp);
      })
  }
}
