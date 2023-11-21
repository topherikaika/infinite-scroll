const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "akFpmHkI0LL4g6N5x9M49fItduJ092SHlvOv_u9hx_s";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach(photo => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank"
    });
    // Create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    //     img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    // Put <img> inside the <a>, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
// Get photos from API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error here
  }
}

// On Load

getPhotos();
