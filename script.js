document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLocaleLowerCase());
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
