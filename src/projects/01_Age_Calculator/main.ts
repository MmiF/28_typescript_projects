import "./style.css";
import { calculatorApp } from "./calculatorApp";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section class="section font-sans max-w-6xl mx-auto">

<article class="calculator xl:flex xl:flex-col items-center w-full max-w-150 pl-10 pt-10 md:pl-15 md:pt-15 lg:pl-30 lg:pt-20 xl:mx-auto xl:pl-0">
    <h1 class="text-4xl sm:text-5xl xl:text-center text-shadow-slate-900 text-shadow-xs font-bold rounded capitalize"><span class="text-amber-50">Javascript</span><br/> <span class="text-teal-600">Age Calculator</span> </h1>

  <div class="bg-slate-200/50 shadow-2xl backdrop-blur-md flex my-10 p-5 md:p-7 rounded-md gap-3 w-65 sm:w-100 md:w-120">
      <input type="date" id="date" class="text-sm sm:text-md md:text-lg cursor-pointer select-none flex-1 py-1 px-2 md:py-2 md:px-4 rounded border-none outline-none custom-date-input bg-white text-black" />

      <button id="btn" class="text-sm md:text-lg cursor-pointer bg-blue-400 rounded-full py-0.5 px-2 font-bold text-white shadow-[1px_2px_3px_gray] active:shadow-none disabled:text-slate-400 disabled:bg-slate-200 disabled:cursor-not-allowed disabled:shadow-none">Calculate</button>
  </div>
  <p id="result" class="text-black text-sm sm:text-lg md:text-xl"></p>
</article>




<div class="fab fab-flower justify-end">
 
  <div tabindex="0" role="button" class="relative btn btn-dash btn-md md:btn-xl btn-circle btn-neutral ml-auto">BH</div>

        <button class="text-xs md:text-lg absolute py-1 px-3 md:py-3 md:px-5 rounded bg-white border-0 shadow-xl">
            <a href="/index.html" class="block relative text-black font-bold after:absolute after:w-8/8 after:h-0.5 after:left-[0%] after:bottom-0 after:bg-slate-900 hover:after:w-0 after:transition-all p-0">Gat back Home Page</a>
        </button>
</div>

</section>
`;

calculatorApp();

// <h1 class="bg-blue-600/50 fixed z-4 backdrop-blur-xs p-4">Javascript Age Calculator</h1>
