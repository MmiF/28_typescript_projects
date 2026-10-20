import "bootstrap-icons/font/bootstrap-icons.css";

import "./style.css";

import stopWatch from "./stopWatch";

document.getElementById("app")!.innerHTML = `

<section>

  <article class="stopwatch flex flex-col gap-5 items-center w-100 pt-50 mx-auto rounded-md">
    <h1 class="text-5xl font-mono" id="displayTime">00:00:00</h1>
    <div class="icons-container flex items-center justify-between gap-3">
      <button class="stop btn btn-circle btn-xl btn-info">
          <i class="bi bi-stop text-4xl rounded-full cursor-pointer"></i>

      </button>

      <button class="play btn btn-circle btn-xl btn-accent">
          <i class="bi bi-play text-4xl rounded-full cursor-pointer"></i>

      </button>

      <button class="reset btn btn-circle btn-xl btn-secondary">

          <i class="bi bi-arrow-clockwise text-4xl rounded-full cursor-pointer"></i>
      </button>
  </article>


  <article class="">
 
        <div class="fab">

        
          <div tabindex="0" role="button" class="btn btn-lg btn-circle">Btn</div>

          <div class="fab-close text-black">
            Close <span class="btn btn-circle btn-lg btn-error">✕</span>
          </div>

          <div class="text-slate-500">Label H
            <button class="btn btn-lg btn-circle">
              <a href="/index.html" class="btn rounded-full">H</a>
            </button>
            </div>
            
        </div>

  </article>
      
 </section>     
      `;

stopWatch();
