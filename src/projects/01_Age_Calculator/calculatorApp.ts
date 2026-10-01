function calculatorApp() {
  const dateInputEl = document.querySelector<HTMLInputElement>("#date")!;
  const calcBtn = document.getElementById("btn") as HTMLButtonElement;
  const result = document.querySelector<HTMLParagraphElement>("#result")!;
  let calcDifDate: number, calcDifMonth: number, calcDifYear: number;

  // Disabled all days after today
  dateInputEl.max = new Date().toISOString().split("T")[0];

  // Click anywhere on the input, brings up the calender
  dateInputEl.addEventListener("click", () => {
    dateInputEl.showPicker();
  });

  // Calculate the uesr age
  function calculateAge():void {
    let birthDate: Date = new Date(dateInputEl.value);
    let today: Date = new Date();

    if (birthDate.toString().toLowerCase() === "invalid date") {
      return alert("Please, set your birthday...");
    }
    let userDate: number = birthDate.getDate();
    let userMonth: number = birthDate.getMonth() + 1;
    let userYear: number = birthDate.getFullYear();

    let todayDate: number = today.getDate();
    let todayMonth: number = today.getMonth() + 1;
    let todayYear: number = today.getFullYear();

    calcDifYear = todayYear - userYear;

    if (todayMonth >= userMonth) {
      calcDifMonth = todayMonth - userMonth;
    } else {
      calcDifYear--;
      calcDifMonth = 12 + todayMonth - userMonth;
    }

    if (todayDate >= userDate) {
      calcDifDate = todayDate - userDate;
    } else {
      calcDifMonth--;
      calcDifDate = getDaysInMonth(userYear, userMonth) + todayDate - userDate;
    }
    if (calcDifDate < 0) {
      calcDifMonth = 11;
      calcDifYear--;
    }

    result.innerHTML = `You are ${calcDifYear} ${calcDifYear <= 1 ? "year" : "years"}, ${calcDifMonth} ${calcDifMonth <= 1 ? "month" : "months"} and ${calcDifDate} ${calcDifDate <= 1 ? `day` : `days`} old`;
  }

  function getDaysInMonth(year: number, month: number): number {
    const date: number = new Date(year, month, 0).getDate();
    return date;
  }

  calcBtn.addEventListener("click", calculateAge);
}

export { calculatorApp };
