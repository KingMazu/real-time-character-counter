const textareaEl = document.getElementById("text-zone");

const totalcounterEl = document.getElementById("total-counter");

const remainingcounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
updateCounter()
});


updateCounter()

function updateCounter(){

  totalcounterEl.innerText =  textareaEl.value.length;
  remainingcounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length ;
}