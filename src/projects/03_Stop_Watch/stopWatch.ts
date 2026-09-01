function stopWatch() {
  const displayTime = document.querySelector(
    "#displayTime",
  ) as HTMLHeadingElement;
  const playBtn = document.querySelector<HTMLButtonElement>(".play")!;
  const stopBtn = document.querySelector(".stop") as HTMLButtonElement;
  const resetBtn = document.querySelector(".reset") as HTMLButtonElement;

  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let timer: number | null = null;

  if (!displayTime || !playBtn || !stopBtn || !resetBtn) return;

  function updateTime() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.textContent = `${h}:${m}:${s}`;
  }

  function watchStart() {
    if (timer !== null) {
      return;
    }
    timer = setInterval(updateTime, 1000);
    playBtn.innerHTML = `
          <i class="bi bi-pause text-4xl rounded-full cursor-pointer"></i>
          `;
  }

  function watchStop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    playBtn.innerHTML = `
          <i class="bi bi-play text-4xl rounded-full cursor-pointer"></i>
          `;
  }

  function watchReset() {
    watchStop();
    seconds = 0;
    minutes = 0;
    hours = 0;

    if (displayTime) {
      displayTime.textContent = "00:00:00";
    }
  }

  playBtn.addEventListener("click", watchStart);
  stopBtn.addEventListener("click", watchStop);
  resetBtn.addEventListener("click", watchReset);
}

export default stopWatch;
