
function getSong(event) {
  event.preventDefault
  alert ("Looking for your Song...")
}



let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", getSong);