import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

//  npm install @angular/http --save
// npm install rxjs-compat --save
//rx js 5 in angular 5
// import {Http,Headers} from '@angular/http'

//angular 11 with rxjs 6.0
import { HttpClient } from '@angular/common/http'
/*
//RXJS 5.0 in Angular 2/4/5
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
*/

// angular 11
import { Observable } from 'rxjs'
import { debounceTime, switchMap, map } from 'rxjs/operators'

@Component({
    selector: "app-weather",
    template: `
    <div class="container">
      <h3 style="background:orange">Live Weather Forecast by Murthy</h3>  
     
      City:<input type="text"
                     [formControl]="searchInput">

      <h3>Current Temperature in {{temperature}}F </h3>
      <h3>Humidity {{humidity}}% </h3>
     <h2>Status : {{description}}</h2>
     </div>
    `
})
export class WeatherComponent {
    //http://api.openweathermap.org/data/2.5/weather?q=chennai&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73

    private baseWeatherURL: string =
        'http://api.openweathermap.org/data/2.5/weather?q=';

    private urlSuffix: string =
        "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";

    // FormControl comes from ReactiveFormsModule
    searchInput: FormControl = new FormControl();  // RX JS Observable control
    temperature: string | undefined;
    description: string | undefined;
    humidity: string | undefined;
    /*
          (Pipe is used for operators in rxjs 6.0)
          //do operator
    */
    constructor(private http: HttpClient) {
        //Observable form control      
        this.searchInput.valueChanges
            .pipe(debounceTime(3000))
            .pipe(switchMap((city: string) => this.getWeather(city)))
            .subscribe((res: any) => {
                this.description = res.weather[0].description;
                this.temperature = res.main.temp;
                this.humidity = res.main.humidity;

            },
                (err: any) =>
                    console.log(
                        `Can't get weather. Error code: %s, URL: %s`,
                        err.message, err.url),
                () => console.log('done')
            );
    }
    ngOnInit() {
        this.searchInput.setValue('Hyderabad')
    }
    //Ajax call here (write this code in service)
    getWeather(city: string): Observable<Array<string>> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .pipe(map((response: any) => {
                console.log(response);
                return response
            }));
    }
}
// end





