const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";

let idx = 1;
let speed = 300 / speedEl.value;

// Function to write out the texr
writeText();

function writeText() {
  // In this case line 13 will at first write out 'W'
  textEl.innerText = text.slice(0, idx);

  // Increase the value. Although you can make it stop if u want to
  idx++;

  // Set back idx if all letters have been written
  if (idx > text.length) {
    idx = 1;
  }

  // Keep writing
  setTimeout(writeText, speed);
}

// To control how fast it will go

speedEl.addEventListener(
  "input",
  (event) => (speed = 300 / event.target.value)
);
