import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { WeatherResponse } from 'src/app/interfaces/iclima'


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherTemp :any
  cityName :any
  weatherIcon:any
  weatherDetails:any 
  constructor(public httpClient:HttpClient) {
    this.loadData()
  }
  


  loadData() {
    this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${"Puente Alto"}&appid=${API_KEY}`)
      .subscribe(results => {
        console.log(results);
        this.weatherTemp = results.main;
        console.log(this.weatherTemp);
        console.log(this.cityName);
        this.weatherDetails = results.weather [0];
        console.log(this.weatherDetails);
        this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
      });
  }
}
