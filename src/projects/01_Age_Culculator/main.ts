import "./style.css";
import { calculatorApp } from "./calculatorApp";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section class="section font-sans">

<article class="calculator w-full max-w-150 pl-20 pt-20 mb-30">
    <h1 class="text-5xl font-bold backdrop-blur-xs rounded capitalize">Javascript<br/> <span class="text-teal-600">Age Calculator</span> </h1>

  <div class="bg-slate-200/50 shadow-2xl backdrop-blur-md flex my-10 p-10 rounded-md gap-3 w-100">
      <input type="date" id="date" class="cursor-pointer bg-white select-none flex-1 p-3 rounded border-none outline-none" />

      <button id="btn" class="cursor-pointer bg-blue-400 rounded-full py-2 px-3 font-bold text-white shadow-[1px_2px_3px_gray] active:shadow-none">Calculate</button>
  </div>

</article>








<ul>
    <li>
    <a href="/index.html" class="relative text-black font-bold after:absolute after:w-7/8 after:h-0.5 after:left-[12%] after:bottom-0 after:bg-slate-900 hover:after:w-0 after:transition-all pl-5">Gat back Home Page</a>
    </li>
</ul>
 
</section>

`;

calculatorApp();

// <h1 class="bg-blue-600/50 fixed z-4 backdrop-blur-xs p-4">Javascript Age Calculator</h1>
