//This will output when the page loads
document.write("Output Zero Here");

//OR does he want it like this

let count = 0;
const numbers = ["One", "Two", "Three"];

function otherWay() {
  if (count < 3) {
    let myElement = "output" + (count + 1);

    document.getElementById(myElement).innerHTML =
      "Output " + numbers[count] + " Here";
    count++;
  }
}
