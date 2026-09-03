function digitalClock() {
  const hrsElem = document.querySelector<HTMLSpanElement>(".hours")!;
  const minElem = document.querySelector<HTMLSpanElement>(".minutes")!;
  const secElem = document.querySelector<HTMLSpanElement>(".seconds")!;

  // if (!hrsElem || !minElem || !secElem) return;

  function updateTime() {
    const currentTime: Date = new Date();

    let hrs: string = String(currentTime.getHours()).padStart(2, "0");
    let min: string = String(currentTime.getMinutes()).padStart(2, "0");
    let sec: string = String(currentTime.getSeconds()).padStart(2, "0");

    hrsElem.textContent = hrs;
    minElem.textContent = min;
    secElem.textContent = sec;
  }

  updateTime();
  setInterval(updateTime, 1000);
}
export default digitalClock;
