import "./style.css";

import digitalClock from "./digitalClock";

document.querySelector("#app")!.innerHTML = `
<section class="relative">

  <article class="fixed w-full flex justify-center items-center translate-y-40 gap-60">
    <div class="w-30 h-30 bg-red-500 sm:-translate-x-10 sm:-translate-y-5"></div>
    <div class="w-30 h-30 bg-sky-500 sm:translate-x-10 sm:translate-y-20 rounded-full"></div>
  </article>
  
  <article class="relative flex justify-center items-center translate-y-40 rounded-lg mx-auto h-50 w-130 bg-sky-500/5 backdrop-blur-2xl">

  <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
 
  <div class="text-neutral-content flex flex-col p-2">
    <span class="hours font-mono text-5xl">
      <span aria-live="polite" aria-label="10"></span>
    </span>
    hour
  </div>
  <div class="text-neutral-content flex flex-col p-2">
    <span class="minutes font-mono text-5xl">
      <span aria-live="polite" aria-label="24"></span>
    </span>
    min
  </div>
  <div class="text-neutral-content flex flex-col p-2">
    <span class="seconds font-mono text-5xl">
      <span aria-live="polite" aria-label="59"></span>
    </span>
    sec
  </div>
</div>
  

</article>


  <article class="">
 
        <div class="fab">

        
          <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-dash btn-success">Btn</div>

          <div class="fab-close text-slate-100">
            Close <span class="btn btn-circle btn-lg btn-error">✕</span>
          </div>

          <div class="text-slate-200">Label H
            <button class="btn btn-lg btn-circle">
              <a href="/index.html" class="btn rounded-full btn-info">H</a>
            </button>
            </div>
            
        </div>

  </article>
      
 </section>     

`;

digitalClock();
