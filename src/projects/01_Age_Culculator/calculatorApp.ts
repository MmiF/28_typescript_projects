function calculatorApp() {
  const dateInputEl = document.querySelector<HTMLInputElement>("#date")!;

  // Disabled all days after today
  dateInputEl.max = new Date().toISOString().split("T")[0];

  dateInputEl.addEventListener("click", () => {
    dateInputEl.showPicker();
  });
}

export { calculatorApp };
