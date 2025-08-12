function getSong(event) {
  event.preventDefault()



  new Typewriter("#song", {
    strings: "Song Lyrics",
    autoStart: true,
    delay: 1,
    cursor: ""
    
  });
  

  
}



let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", getSong);