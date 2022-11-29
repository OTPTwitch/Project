document.addEventListener('DOMContentLoaded', function() {
    let input1 = document.getElementById('timer1');
    let button1 = document.getElementById('timer2');
    let div1 = document.getElementById('timer3');
    let inputCoff = 0;
    function startTimer() {
      nIntervId = setInterval(onClick, 1000);
    };
    function onClick() {
      div1.textContent = input1.value - inputCoff;
      inputCoff += 1;
      console.log(div1.textContent)
      if (div1.textContent <= 0) {
        div1.textContent = 0;
        clearInterval(nIntervId);
      }
    };
    button1.addEventListener('click', startTimer);
  });