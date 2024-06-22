import axios from "axios";

const form = document.querySelector("form");
const addressInput = document.getElementById("address")! as HTMLInputElement;
const mapImage = document.getElementById("map-image")! as HTMLImageElement;
const addyDiv = document.querySelector(".addy")! as HTMLDivElement;
const Gonley = "0c008ef871bf49afaf51e3c3b267058e";

// Creating a custom type for the geoapify app
type GeoApFy = {
  results: {
    address_line2: string;
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

  // Send to geoapify geocoding API
  axios
    .get<GeoApFy>(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURI(
        enteredAddress
      )}&format=json&apiKey=${Gonley}`
    )
    .then((res) => {
      const coordinates = res.data.results[0].bbox;
      const addy = res.data.results[0].address_line2;
      const lat = (coordinates.lat1 + coordinates.lat2) / 2;
      const lon = (coordinates.lon1 + coordinates.lon2) / 2;
      console.log(res);
      console.log(coordinates);
      console.log(addy);

      // Generate static map URL based on coordinates
      const mapUrl = `https://maps.geoapify.com/v1/staticmap?&width=600&height=400&center=lonlat:${lon},${lat}&zoom=14&apiKey=${Gonley}`;

      // Update map image src attribute
      mapImage.src = mapUrl;

      //display adress
      addyDiv.innerHTML = addy;
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form?.addEventListener("submit", searchAddressHandler);
