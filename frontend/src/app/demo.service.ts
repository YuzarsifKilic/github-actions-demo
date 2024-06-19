import { Injectable } from '@angular/core';
import {Axios} from "axios";
import {environment} from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiUrl: string = environment.apiUrl;

  constructor(private axios: Axios) { }

  async getDemo() {
    const response = await this.axios.get(`${this.apiUrl}/api/demo`);
    console.log(response);
  }

}
