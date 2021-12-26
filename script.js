const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";

let idx = 1;
let speed = 300 / speedEl.value;

// Function to write out the texr
writeText();

function writeText() {
  // In this case this will at first write out 'W'
  textEl.innerText = text.slice(0, idx);

  // Increase the value
  idx++;

  // Set back idx if all letters have been written
  if (idx > text.length) {
    idx = 1;
  }

  // Keep writing
  setTimeout(writeText, speed);
}
