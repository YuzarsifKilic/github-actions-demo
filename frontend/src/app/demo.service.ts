import { Injectable } from '@angular/core';
import {Axios} from "axios";
import {environment} from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiUrl: string = environment.apiUrl;

  constructor(private axios: Axios) { }

  getDemo() {
    return this.axios.get(`${this.apiUrl}/api/demo`)
      .then(response => {
        console.log(response);
      });
  }

}
