
//ng new ag-app --style scss --routing false
//npm install ag-grid-community    ag-grid-angular
// import in app.module
//in styles.css  add ag-grid styles.
//@import "ag-grid-community/dist/styles/ag-grid.css";
//@import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import {Component} from '@angular/core'
import {HttpClient} from '@angular/common/http'


@Component({
    selector: 'app-ag-grid',
    templateUrl: './ag-grid.component.html',
})
export class AgGridComponent {
    // title = 'Ag-grid Demo by Murthy';
    rowData:any
//     columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

//   rowData = [
//     { make: "Toyota", model: "Celica", price: 35000 },
//     { make: "Ford", model: "Mondeo", price: 32000 },
//     { make: "Porsche", model: "Boxter", price: 72000 }
//   ];
        
    constructor(private http: HttpClient) {
    }
  
    columnDefs = [
        {headerName: 'Id', field: 'id', sortable: true, filter: true, checkboxSelection: true },
        {headerName: 'Username', field: 'name', sortable: true, filter: true },
        {headerName: 'Email', field: 'email', sortable: true, filter: true }
    ];

  
    ngOnInit() {
        this.rowData = this.http.get('https://jsonplaceholder.typicode.com/users');
    }    
}
