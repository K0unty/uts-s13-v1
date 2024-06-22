//Code here

import axios from "axios";

const form = document.querySelector("form");
const addressInput = document.getElementById("address")! as HTMLInputElement;
const Gonley = "0c008ef871bf49afaf51e3c3b267058e";

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  // Send to google api
  // Structure -https://api.geoapify.com/v1/geocode/search?text=6Th%20Avenue&format=json&apiKey=YOUR_API_KEY
  axios
    .get(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURI(
        enteredAddress
      )}&format=json&apiKey=${Gonley}`
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
form?.addEventListener("submit", searchAddressHandler);
