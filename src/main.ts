import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section id="center" class="h-screen">
 <h1 class="text-4xl text-center p-3">Welcome Citizens</h1>

 
    <ul  class="[&_li_a]:text-lg [&_li]:hover:-translate-y-1 [&_li]:transition-transform flex flex-col gap-4 items-center p-4">
    
      <li class="w-full shadow shadow-slate-50 border-slate-300 border rounded">
        <a href="./src/projects/01_Age_Culculator/index.html" class="block w-full font-bold p-3">Age Calculator</a>
      </li>
      
      <li class="w-full shadow shadow-slate-50 border-slate-300 border rounded">
      <a href="#" class="block w-full font-bold p-3">Weather App</a>
      </li>
      
      <li class="w-full shadow shadow-slate-50 border-slate-300 border rounded">
      <a href="#" class="block w-full font-bold p-3">test</a>
      </li>
      
      <li class="w-full shadow shadow-slate-50 border-slate-300 border rounded">
      <a href="#" class="block w-full font-bold p-3">test2</a>
      </li>
      
      <li class="w-full shadow shadow-slate-50 border-slate-300 border rounded">
      <a href="#" class="block w-full font-bold p-3">test3</a>
      </li>

    </ul>
 
</section>

`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
