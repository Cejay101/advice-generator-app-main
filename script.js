'use strict'
const adviceNum = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const nextAdvice = document.querySelector(".shine");
// Advice API
const  getAdvice =async()=>{
const res = await fetch("https://api.adviceslip.com/advice")
const data =await res.json()

adviceText.innerHTML =`"${data.slip.advice}"`
}
getAdvice()
nextAdvice.addEventListener('click', function(){
  // Increase the advice number
adviceNum.textContent = (+adviceNum.textContent+1);
adviceText.textContent= getAdvice()

})