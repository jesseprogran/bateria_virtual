document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLocaleLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
});

function playSound(sound) {
  let audioElemnet = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElemnet) {
    audioElemnet.play();
  }

  if (keyElement) {
    audioElemnet.currentTime = 0;
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

function playComposition(songArray) {
  let wait = 0;
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);

    wait += 250;
  }
}
