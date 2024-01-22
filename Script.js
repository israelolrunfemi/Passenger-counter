const countEl= document.querySelector("#count-el")
const incrementBtn= document.querySelector("#increment-btn")
const saveBtn = document.querySelector("#save-btn")
const saveCount = document.querySelector ("#save-count")

let count = 0
// count function
function increment() {
    count  +=  1
    countEl.innerHTML= count
}
// save function

function save() {
   let countStr = count + " , "
   saveCount.innerHTML += countStr

    
}
