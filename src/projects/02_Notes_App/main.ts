import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./style.css";

import notesApp from "./notesApp";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section id="container">

  <article class="pl-10 pt-10">
    <div class="flex gap-3 items-center text-4xl mb-5">
      <h1 class="order-1 text-shadow-sm text-shadow-slate-900 select-none font-bold tracking-wider">Notes</h1>
      <i class="bi bi-journals text-blue-800"></i>
    </div>

    <div class="">
      <button class="add-notes-btn btn border-0 outline-slate-900 bg-violet-500 mt-10 flex items-center font-bold gap-3 py-2 px-3 rounded-full cursor-pointer capitalize">
        <i class="bi bi-vector-pen text-2xl"></i>
        create notes
      </button>
    </div>
    
    <div class="notes-container w-80 mt-6"></div>
    
  </article>





  <article class="fab fab-flower justify-end">
 
    <div tabindex="0" role="button" class="relative btn btn-circle btn-md md:btn-xl ml-auto">BH</div>

    <button class="absolute text-xs md:text-lg bg-white border-0 shadow-xl rounded-full">
          <a href="/index.html" class="block py-1 px-2 relative text-black font-bold hover:text-purple-700">
            <i class="bi bi-house font-bold text-xl"></i>
          </a>
    </button>
  </article>

</section>
`;

notesApp();

// <textarea class="textarea tracking-widest font-medium resize-none shadow-xl bg-white text-black placeholder:text-black outline-slate-800 text-md" placeholder="Note..." name="note"></textarea>
// <button class="delete-btn text-xl cursor-pointer absolute bottom-1 left-7/8"><i class="bi bi-trash3 text-slate-500 hover:text-slate-900"></i></button>
