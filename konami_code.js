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
  body.addEventListener('keydown', function(event) {
  function onKeyDownHandler(e) {
  const key = e.key;
  while (codes[index] < codes.length){
  if (key === codes[index]) {
    console.log(key);
    console.log(index);
    index++;
  }
  
  if (index === codes.length-1) {
    alert("Hurray!");
    index = 0;
  }
   else {
    index = 0;
   }
  }
}
});
var index = 0;
}

