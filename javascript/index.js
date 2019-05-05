var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var tip1 = document.getElementById('tip1');
var tip2 = document.getElementById('tip2');
var tip3 = document.getElementById('tip3');
var tip4 = document.getElementById('tip4');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var count = 0;
var methods = [show1, show2, show3, show4];

function show1() {
  btn1.classList.add('btn-active');
  btn2.classList.remove('btn-active');
  btn3.classList.remove('btn-active');
  btn4.classList.remove('btn-active');
  tip1.classList.add('tip-active');
  tip2.classList.remove('tip-active');
  tip3.classList.remove('tip-active');
  tip4.classList.remove('tip-active');
  img1.style.display = 'block';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
}

function show4(){
  btn4.classList.add('btn-active');
  btn2.classList.remove('btn-active');
  btn3.classList.remove('btn-active');
  btn1.classList.remove('btn-active');
  tip4.classList.add('tip-active');
  tip1.classList.remove('tip-active');
  tip2.classList.remove('tip-active');
  tip3.classList.remove('tip-active');
  img4.style.display = 'block';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img1.style.display = 'none';
}
function show2() {
  btn2.classList.add('btn-active');
  btn1.classList.remove('btn-active');
  btn3.classList.remove('btn-active');
  btn4.classList.remove('btn-active');
  tip2.classList.add('tip-active');
  tip1.classList.remove('tip-active');
  tip3.classList.remove('tip-active');
  tip4.classList.remove('tip-active');
  img2.style.display = 'block';
  img1.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
}
function show3() {
  btn3.classList.add('btn-active');
  btn2.classList.remove('btn-active');
  btn1.classList.remove('btn-active');
  btn4.classList.remove('btn-active');
  tip3.classList.add('tip-active');
  tip1.classList.remove('tip-active');
  tip2.classList.remove('tip-active');
  tip4.classList.remove('tip-active');
  img3.style.display = 'block';
  img2.style.display = 'none';
  img1.style.display = 'none';
  img4.style.display = 'none';
}
btn1.addEventListener('mouseover', show1);
btn2.addEventListener('mouseover', show2);
btn3.addEventListener('mouseover', show3);
btn4.addEventListener('mouseover', show4);
setInterval(function() {
  count ++;
  methods[count]();
  if(count === 3) {
    count = -1;
  }
}, 5000);