const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  var body = document.querySelector('body');
  body.addEventListener('keydown', function(e) {
  var key = e.key;
  
  if (key === codes[index]) {
    console.log(key);
    console.log(index);
    index++;
  
  
   if (index === codes.length){
     
     alert("Hurray!");
     index = 0;
   }
    
  }
   else {
    index = 0;
   }
  

});
var index = 0;
}

