import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  longProcessOutput = '';
  worker: Worker | undefined
  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(new URL('../app.worker', import.meta.url));
      this.worker.onmessage = (result: any) => {
        this.longProcessOutput += `${result.data}` + '\n'
      };
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      alert(" sorry your browser does not support")
    }
  }
  longLoop() {
    this.longProcessOutput = ''
    this.worker?.postMessage('Starting looping with web worker');
  }
  ngOnInit(): void {
  }
}

//without worker
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-worker',
//   templateUrl: './worker.component.html',
//   styleUrls: ['./worker.component.css']
// })
// export class WorkerComponent implements OnInit {
//   constructor() { }
//   longProcessOutput=''
//   ngOnInit(): void {
//   }
//   longLoop(){
//     this.longProcessOutput=''
//     for(var x=1;x<10000000000;x++){
//       var y=x/3.2
//       if((x%2000000)==0){
//         this.longProcessOutput+=x+'\n'
//         console.log("without web workers:"+x)
//       }
//     }
//   }
// }