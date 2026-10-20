import "./style.css";
import backHomeBtn from "./backHomeBtn";
import checkAccessiblity from "./Drag&DropAccessibility";

backHomeBtn();
checkAccessiblity();

const ulBoxes: NodeListOf<HTMLUListElement> = document.querySelectorAll("ul");
let draggedItem: HTMLLIElement | null = null;

document.addEventListener("dragstart", (e) => {
  const target = e.target as HTMLElement;
  if (target && target.tagName === "LI") {
    target.classList.add("opacity-30");
    draggedItem = target as HTMLLIElement;
  }
});

document.addEventListener("dragend", (e) => {
  const target = e.target as HTMLElement;
  if (target && target.tagName === "LI") {
    target.classList.remove("opacity-30");
    draggedItem = null;
  }
});

ulBoxes.forEach((ul) => {
  ul.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  ul.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedItem) {
      ul.append(draggedItem);
    }
  });
});
// liElms.forEach((li) => {
//   li.addEventListener("dragstart", (e) => {
//     let selectedLi = e.target as HTMLLIElement | null;

//     rightBox.addEventListener("dragover", (e) => {
//       e.preventDefault();
//     });
//     rightBox.addEventListener("drop", () => {
//       if (selectedLi) {
//         rightBox.append(selectedLi);
//       }
//       selectedLi = null;
//     });

//     leftBox.addEventListener("dragover", (e) => {
//       e.preventDefault();
//     });
//     leftBox.addEventListener("drop", () => {
//       if (selectedLi) {
//         leftBox.append(selectedLi);
//       }
//       selectedLi = null;
//     });
//   });
// });
