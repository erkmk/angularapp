import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs'

@Component({
    selector: 'app-http',
    template: `
  <h3 style="text-align:center;background:orange">
      Angular 13 HttpClient Demo App by Khalid Khan
  </h3>
 
  <h3>Foods (CRUD Demo)</h3>
  <ul>
    <li *ngFor="let food of foods ">
    <input type="text" name="food-name" [(ngModel)]="food.name">
    <button (click)="updateFood(food)">Update</button> 
    <button (click)="deleteFood(food)">Delete</button></li>
  </ul>
 
  <p>Create a new food: 
  <input type="text" name="food_name" [(ngModel)]="food_name">
  <button (click)="createFood(food_name)">Save</button></p>  
  `
})
export class HttpComponent implements OnInit {
    public foods: any;
    public food_name: any;
    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getFoods();
    }
    getFoods() {

        this._httpService.getFoods().subscribe(
            // the first argument is a function which runs on success/Resolve
            (data: any) => { this.foods = data },
            // the second argument is a function which runs on error/Reject
            (err: any) => console.error(err),
            // the third argument is a function which runs on completion/Notify
            () => console.log('done loading foods')
        );
    }


    createFood(name: any) {
        let food = { name: name };
        this._httpService.createFood(food).subscribe(
            (data: any) => {
                // refresh the list
                this.getFoods();
                return true;
            },
            error => {
                console.error("Error saving food!");
                return error;
            }
        );
    }

    updateFood(food: any) {
        this._httpService.updateFood(food).subscribe(
            (data: any) => {
                // refresh the list
                this.getFoods();
                alert("New food item is updated in database")
                return true;
            },
            error => {
                console.error("Error saving food!");
                return error
            }
        );
    }

    deleteFood(food: any) {
        if (window.confirm("Are you sure you want to delete " + food.name + "?")) {
            this._httpService.deleteFood(food).subscribe(
                (data: any) => {
                    // refresh the list
                    this.getFoods();
                    return true;
                },
                error => {
                    console.error("Error deleting food!");
                    return error;
                }
            );
        }
    }
}

