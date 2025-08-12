function getSong(event) {
  event.preventDefault()
  

  let songElement = document.querySelector("#song")
  songElement.innerHTML = "Song Lyrics"
}



let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", getSong);