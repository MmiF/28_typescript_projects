function notesApp() {
  // const deleteBtnEl = document.querySelector<HTMLButtonElement>(".delete-btn");
  const addNotesBtnEl =
    document.querySelector<HTMLButtonElement>(".add-notes")!;
  const notesContainerEl =
    document.querySelector<HTMLDivElement>(".notes-container")!;

  function createTextarea() {
    let textarea: HTMLTextAreaElement = document.createElement("textarea");
    let btn = document.createElement("button");
    let iconEl = document.createElement("i");

    btn.classList.add(
      "delete-btn",
      "text-xl",
      "cursor-pointer",
      "absolute",
      "bottom-1",
      "left-7/8",
    );
    iconEl.classList.add(
      "bi",
      "bi-trash3",
      "text-slate-500",
      "hover:text-slate-900",
    );
    textarea.classList.add(
      "textarea",
      "tracking-widest",
      "font-medium",
      "resize-none",
      "shadow-xl",
      "bg-white",
      "text-black",
      "placeholder:text-black",
      "outline-slate-800",
      "text-md",
      "mt-5",
    );
    textarea.setAttribute("placeholder", "Notes...");
    textarea.setAttribute("name", "note");

    btn.append(iconEl);
    notesContainerEl.append(textarea, btn);
  }

  addNotesBtnEl.addEventListener("click", createTextarea);
}

export default notesApp;
