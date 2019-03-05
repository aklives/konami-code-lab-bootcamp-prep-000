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

var index = 0;

function init() {
  let idx = 0;

  document.body.addEventListener("keydown", (e) => {
    const key = e.key;

    idx = (codes[idx] === key) ? ++idx : 0;
    console.log[key];
    console.log[index];


    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0;
    }

  });

index = 0;
}

