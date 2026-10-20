function checkAccessbility() {
  const moveBtns: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll("li > button");
  const ulElms: NodeListOf<HTMLUListElement> = document.querySelectorAll("ul");

  console.log(ulElms);

  moveBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      handleAccessibility(btn);
    });
  });

  function handleAccessibility(btn: HTMLButtonElement) {
    const liElm = btn.closest("li") as HTMLLIElement;
    const currentUl = btn.parentElement?.parentElement;
    const targetUlElm = currentUl === ulElms[0] ? ulElms[1] : ulElms[0];

    if (targetUlElm) {
      targetUlElm.append(liElm);
    }
  }
}

export default checkAccessbility;
