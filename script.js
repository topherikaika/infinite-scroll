const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "akFpmHkI0LL4g6N5x9M49fItduJ092SHlvOv_u9hx_s";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    console.log(photosArray);
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On Load

getPhotos();
