// Unsplash API
const count = 10;
const apiKey = "API_KEY";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On Load

getPhotos();
