
var randomNumber = Math.floor(Math.random() * 100) + 1;
let schetchikPopitok = 0;


function ugadat () {
  return Number(document.querySelector('#predpolozenie').value) 
}

function sravnenie (x, y) {
  if (x==y) {
    document.getElementById('gameover').innerHTML = "Вы угадали это число!"
    document.getElementById('popitki').innerHTML = "Попыток осталось: " + (9 - schetchikPopitok);
    const button = document.getElementById("ugadat");
    button.style.display = "none"
    ++schetchikPopitok;
    return  "Это число " + y + " !"
  }
  else if (x>y) {
    document.getElementById('gameover').innerHTML = "Число " + y + " меньше загаданного!"
    document.getElementById('popitki').innerHTML = "Попыток осталось: " + (9 - schetchikPopitok);
    ++schetchikPopitok;
    return    y + " < Загаданное число"
  }
  else if (x<y) {
    document.getElementById('gameover').innerHTML = "Число " + y + " больше загаданного!"
    document.getElementById('popitki').innerHTML = "Попыток осталось: " + (9 - schetchikPopitok);
    ++schetchikPopitok;
    return  y + " > Загаданное число"
  }  
}

function raspechatatRezultatRaunda () {
  let parent = document.querySelector('#rezultat');
  let p = document.createElement('p');
  p.textContent = sravnenie (randomNumber, ugadat ());
  parent.appendChild(p);     
}

function obnovitStranicu () {
  location.reload();
}

function igraVNeskolkoPopitok (osnovaFunction, schetchik) {
  if ((schetchik == 10)&&(randomNumber != ugadat ())) {
  const button = document.getElementById("ugadat");
  button.style.display = "none"
  document.getElementById('gameover').innerHTML = "Вы проиграли! Загаданное число было: " + randomNumber;
  }
  else if ((schetchik == 10)&&(randomNumber == ugadat ())) {
  document.getElementById('gameover').innerHTML = "Вы угадали это число!"}
  else osnovaFunction;  
}























