//Сделать функцию, вывод которой будет рандомным числом от 1 до 100 (Исключить 0)

function randomNmbr () {
    let x = Math.floor(Math.random(1)*100);
    if (x==0) {return x+1}
    else return x
};
randomNmbr ();
let x = randomNmbr();

/*Сделать функцию, которая принимает число от пользователя, сравнивает это число с числом возврата 
функции randomNmbr() и выводит дальнейшие решения*/

function vvodText () {
    return document.getElementById('Vvod');
    }
    vvodText ();

function userNumber (numberUser) {
    if (numberUser == x) {
        return console.log("Вы угадали это число!")
    }
    else if (numberUser > x) {
        return console.log("Ваше число больше загаданного числа!")
    }
    else if (numberUser < x) {
        return console.log("Ваше число меньше загаданного числа!")}

    else return console.log("Введите число")
}
userNumber(12);





