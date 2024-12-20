//Сделать функцию, вывод которой будет рандомным числом от 1 до 100 (Исключить 0).

function randomNmbr () {
    let x = Math.floor(Math.random(1)*100);
    if (x==0) {return x+1}
    else return x
};
randomNmbr ();

