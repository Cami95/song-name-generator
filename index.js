
function gettingSong (response) {

  new Typewriter("#song", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: ""
    
  });

}



function getSong(event) {
  event.preventDefault()


  let apiKey = "d0abb40f949d3e5e54983cob5a3ct305"
  let prompt = "Please give me the tile of a song, who wrote it,  and the song lyrics. Have the song title on top, below that have the name of the song writter, and below that will be the lyrics"
  let context = "You are a world famous DJ who can easily find a song the relates to any emotion"
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`



  axios.get(apiURL).then(gettingSong)


}



let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", getSong);