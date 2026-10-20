function backHomeBtn() {
  const bhBtn = document.querySelector(".display-h-btn")!;

  bhBtn.addEventListener("click", (e) => {
    e.stopPropagation();
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
    console.log(target);
    console.log(homeBtn);

    if (target) {
      homeBtn.classList.add("scale-0");
      homeBtn.classList.remove("showBtn");
    }
  });
}

export default backHomeBtn;
