import { Component } from '@angular/core';
import {DemoService} from "../demo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.demoService.getDemo();
  }
}
