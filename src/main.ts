import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section id="center" class="h-screen">
 <h1 class="text-4xl text-center p-3">Welcome Citizens</h1>


 <ul class="list rounded-box shadow-md [&_li]:m-2 [&_li]:items-center [&_li]:font-bold">
  
  <li class="block aura aura-rainbow p-0.5 list-row bg-slate-700 transition-transform hover:-translate-y-1">
    
        <a href="./src/projects/01_Age_Culculator/index.html" class="card bg-base-100 flex flex-row items-center gap-5 w-full py-6">
            <div class="text-4xl font-thin opacity-30 pl-3 tabular-nums">01</div>
            <div>Age Calculator</div>
        </a>

  </li>
  
  <li class="block aura aura-holo p-0.5 list-row bg-slate-700 transition-transform hover:-translate-y-1">

        <a href="./src/projects/02_Notes_App/index.html" class="card bg-base-100 flex flex-row items-center gap-5 w-full py-6">
            <div class="text-4xl font-thin opacity-30 pl-3 tabular-nums">02</div>
            <div>Note App</div>
        </a>

  </li>
  
  <li class="block aura aura-rainbow p-0.5 list-row bg-slate-700 transition-all hover:-translate-y-1">

    <a href="./src/projects/03_Stop_Watch/index.html" class="card bg-base-100 flex flex-row items-center gap-5 w-full py-6">
      <div class="text-4xl font-thin opacity-30 pl-3 tabular-nums">03</div>
      <div>Stop Watch</div>
    </a>

  </li>

  <li class="block aura aura-holo p-0.5 list-row bg-slate-700 transition-all hover:-translate-y-1">

    <a href="./src/projects/03_Stop_Watch/index.html" class="card bg-base-100 flex flex-row items-center gap-5 w-full py-6">
      <div class="text-4xl font-thin opacity-30 pl-3 tabular-nums">04</div>
      <div class="capitalize">test app</div>
    </a>

  </li>
</ul>
 
</section>
`;

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
