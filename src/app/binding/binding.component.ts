import { Component } from "@angular/core";
import { TestService } from "./test.service";




@Component({
    selector:'app-binding',
    templateUrl:'./binding.component.html'
})
export class BindingComponent{
    username:string = 'Khalid Khan'
    company:string = ''
    constructor(private ts:TestService){
        this.company = 'Integrichain'
        alert(this.ts.getInfo())
    }

    items:any=[
        {id:1,name:'Savings,',balance:10000},
        {id:2,name:'Current,',balance:5000},
        {id:3,name:'Fix Deposit,',balance:20000},
        
    ]
    
    clicked:boolean=false
    clickedItem:any={}
    onItemClicked(item:any){
        this.clicked=true
        this.clickedItem=item
    }

    trackById(index:number, item:any){
        return item.id
    }
    buttonStatus:boolean = false
    save(event:any){
        alert('OK.... thanks for opening account in HDFC')
        this.buttonStatus = true
    }
}

