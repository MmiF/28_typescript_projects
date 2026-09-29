import "./style.css";
console.log("this is from Main.ts in drag & drop");

const bhBtn = document.querySelector(".display-h-btn")!;

bhBtn.addEventListener("click", (e) => {
  const target = e.target as HTMLButtonElement;

  const displayHomeBtn = target.closest("button");

  if (displayHomeBtn) {
    const homeBtn = bhBtn.nextElementSibling as HTMLLinkElement;

    if (homeBtn.classList.contains("scale-0")) {
      homeBtn.classList.add("showBtn");
      homeBtn.classList.remove("scale-0");
    } else {
      homeBtn.classList.add("scale-0");
      homeBtn.classList.remove("showBtn");
    }
  }
});

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const homeBtn = bhBtn.nextElementSibling as HTMLLinkElement;
  console.log(target)
  
  if (!target.contains(bhBtn) && target !== bhBtn) {
    homeBtn.classList.add("scale-0");
    homeBtn.classList.remove("showBtn");
  }
});
