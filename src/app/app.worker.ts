/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log(`in Worker thread: ${data}`)
  
  for(var x=1; x<10000000000; x++) {
    var y = x / 3.2
    if((x % 2000000) == 0) {
      postMessage(x);  // internal method of HTML5
    }
  }

});