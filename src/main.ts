//Code here

import axios from "axios";

const form = document.querySelector("form");
const addressInput = document.getElementById("address")! as HTMLInputElement;
const Gonley = "0c008ef871bf49afaf51e3c3b267058e";

// Creating a customt type for the geoapify app
type GeoApFy = {
  results: {
    bbox: {
      lat1: number;
      lat2: number;
      lon1: number;
      lon2: number;
    };
  }[];
};

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  // Send to google api
  // Structure -https://api.geoapify.com/v1/geocode/search?text=6Th%20Avenue&format=json&apiKey=YOUR_API_KEY
  axios
    .get<GeoApFy>(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURI(
        enteredAddress
      )}&format=json&apiKey=${Gonley}`
    )
    .then((res) => {
      const coordinates = res.data.results[0].bbox;
      console.log(coordinates);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
form?.addEventListener("submit", searchAddressHandler);
