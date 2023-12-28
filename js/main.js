const sumEl = document.getElementById("sum-el")
const countEl = document.getElementById("count-el")
const minusEl = document.getElementById("minus-el")
const saveEl = document.getElementById("save-el")
const previousSumEl = document.getElementById("previous-sum-el")
const biEl = document.getElementById("bi-el")
let count = 0
const audio = new Audio("/sounds/dogbarking")

let dayTotals = [ ]
previousSumEl.textContent = dayTotals


countEl.addEventListener("click", function() {
   count++
   sumEl.textContent = count  
   audio.play()
})

minusEl.addEventListener("dblclick", function() {
   count--
   sumEl.textContent = count
   console.log(count)
})

saveEl.addEventListener("click", function() {
   if (count < 8) {
     dayTotals.push(count + "👎")
   } else {
     dayTotals.push(count + "🐶")
   }
   
   previousSumEl.textContent = dayTotals.join(", ")
   count = 0
   sumEl.textContent = count
   
  /* updateStats(dayTotals) */
})

/* function updateStats(arg) {
   let stats = {}
   for (let i = 0; i < dayTotals.length; i++) {
      console.log(dayTotals[i])
   }
} */

/* 🐶  👎 */

function myPlay(){
    var audio = new Audio("sample.mp3");
    audio.play();
}

