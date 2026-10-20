function notesApp() {
  // Global Variables
  const addNotesBtnEl =
    document.querySelector<HTMLButtonElement>(".add-notes-btn")!;
  const parentNotesContainerEl =
    document.querySelector<HTMLDivElement>(".notes-container")!;

  // Create Note Element function
  function createNoteElement(textValue: string = ""): HTMLDivElement {
    let noteContainer: HTMLDivElement = document.createElement("div");
    let textarea: HTMLTextAreaElement = document.createElement("textarea");
    let btn: HTMLButtonElement = document.createElement("button");
    let iconEl: HTMLElement = document.createElement("i");

    noteContainer.classList.add("relative", "note-container");
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
    textarea.value = textValue;

    btn.append(iconEl);
    noteContainer.append(textarea, btn);

    return noteContainer;
  }

  // Display textarea function
  function displayTextarea() {
    const noteEl = createNoteElement("");
    parentNotesContainerEl.append(noteEl);
    updateLocalStorage();
  }

  // Delete Note Button function
  parentNotesContainerEl.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const deleteBtn = target.closest<HTMLButtonElement>(".delete-btn");

    if (deleteBtn) {
      deleteBtn.closest<HTMLDivElement>(".note-container")?.remove();
      updateLocalStorage();
    }
  });

  // update localStorage when typing in textarea
  function updateLSWhenTypinginTE(e: InputEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === "TEXTAREA") {
      updateLocalStorage();
    }
  }

  // Save clean Data array to lcoalStorage
  function updateLocalStorage() {
    const textarea =
      parentNotesContainerEl.querySelectorAll<HTMLTextAreaElement>("textarea");
    console.log(textarea);

    const notesData: string[] = Array.from(textarea).map((ta) => ta.value);
    console.log(notesData);

    localStorage.setItem("notes", JSON.stringify(notesData));
  }

  // Restore notes array on load
  function loadNotes() {
    const rawData = localStorage.getItem("notes");
    console.log(rawData);
    if (!rawData) return;

    try {
      const notesData: string[] = JSON.parse(rawData);
      parentNotesContainerEl.innerHTML = "";

      notesData.forEach((note) => {
        const noteEl = createNoteElement(note);
        parentNotesContainerEl.append(noteEl);
      });
    } catch (err) {
      console.error(`Failed to parse notes from Storage: ${err}`);
    }
  }

  // Event Listeners
  addNotesBtnEl.addEventListener("click", displayTextarea);
  parentNotesContainerEl.addEventListener("input", updateLSWhenTypinginTE);
  document.addEventListener("DOMContentLoaded", loadNotes);
}

export default notesApp;
