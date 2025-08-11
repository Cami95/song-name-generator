

function getSong(event) {
    songElement.innerHTML= "insert fake poem"
    new Typewriter("#song", {
        strings: "The fake Song",
        autoStart: true,
        delay: 1
    
      });
}







let songFormElement = document.querySelector("#song-generator-form")
songFormElement.addEventListener("sumbmit", getSong)