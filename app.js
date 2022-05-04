let hero = document.querySelector('.container');
let rate = document.querySelector('.btn');
let submit = document.querySelector('.sub');
let btn1 = document.querySelector('#one');
let btn2 = document.querySelector('#two')
let btn3 = document.querySelector("#three");
let btn4 = document.querySelector("#four");
let btn5= document.querySelector("#five");


function thankYouState() {
    let rateCard = sessionStorage.getItem('myRate');
    hero.innerHTML = "";
    hero.innerHTML = `<div class="feedback">
  <div>
<img src="images/illustration-thank-you.svg" alt="">
  </div>
  <div class="select">
 <p id="num" class="mt-3 mb-3"> You selected ${rateCard}  out of 5
</p>
 <h1> Thank you!</h1>
<p>
  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch! 
</p>
  </div>
</div>`
}

function rateNum(e) {
    if (e.target != submit) {
        let rate = e.target.innerHTML;
        console.log(rate);
        sessionStorage.setItem('myRate', rate);
        return rate;
    }
    
}
rate.addEventListener('click', rateNum);
submit.addEventListener('click', thankYouState);