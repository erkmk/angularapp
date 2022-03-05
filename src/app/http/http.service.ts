//Observable-Data Source
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { debounceTime,filter,map } from "rxjs/operators";

//jwt_token=response.data.headers['jwt_token]

const jwt_token = 'balbaldkfsdfjfkjsf'
const httpOptions:any={
    headers:new HttpHeaders({
        'Content-Type':'application/json',
        'token':jwt_token
    })
}

@Injectable({providedIn:'root'})
export class HttpService{
    constructor(private http:HttpClient){
        console.log("Http service ready")
    }
    base_url='http://localhost:3000'

    //CRUD
    getFoods():any{
        return this.http.get(this.base_url+'/api/food') //it will return the observable to component whoever subscribe it.
            .pipe(debounceTime(5000)) //wait 5 sec after getting the data.
            .pipe(filter(response => response != undefined))
            .pipe(map(response => {
                console.log(response)
                return response
            }))
    }
    createFood(food:any){
        let body=JSON.stringify(food)
        return this.http.post(this.base_url+'/api/food', body, httpOptions)
    }
    updateFood(food:any){
        let body=JSON.stringify(food)
        return this.http.put(this.base_url+'/api/food/'+food.id, body, httpOptions)

    }
    deleteFood(food:any){
        return this.http.delete(this.base_url+'/api/food/'+food.id)

    }


}