// Lambdas
// sind kürzere alternativen zu den anonymen Funktionen
// nennt man ach Pfeil oder Arrow Functions
// Werden häufig als Parameter für anderen Funktionen benutzt
// Sparen function Keyword, Klammern und return ein solange sie einzeilig sind

const add = (num1, num2) => num1 + num2;
let sum = add(5,8);
console.log(sum);

// Höhere Array Funktionen
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(callback)
// Iteriert über jedes Element des Arrays und führt damit die callback-Methode aus
function logNumber(num) {
    console.log(num);
}
numArr.forEach(logNumber);

console.log("Jetzt mit Lambda:");
// Klammern werden bei einer Lamnbda Funktion nur benötigt, wenn wir mehr als einen 
// Parameter haben
numArr.forEach((num, index) => {
    console.log("Nummer: " + num + " " + "| Index: " + index);
});

// arr.filter(callback)
// Gibt ein neues Array zurück, das aus den Elementen besteht bei denen der callback
// true ergeben hat
let evenNums = numArr.filter((num) => num % 2 === 0);
let oddNums = numArr.filter((num) => num % 2 !== 0);

console.log(evenNums +"\n"+ oddNums);


// arr.map(callback) 
// Gibt ein neues Array zurück, das aus den Elementen des Arrays besteht auf denen
// die callback Funktion angewendet wurde
evenNums = evenNums.map((num) => num*2);
console.log(evenNums);


// arr.reduce(callback(mit zwei Parametern))
// Iteriert über das Array und gibt einen einzigen Wert zurück
sum = numArr.reduce((sum, number) => sum + number);
console.log(sum);

// arr.every(callback) 
// Gibt true zurück, falls der callback bei jedem einem element true ergibt
console.log( 
    numArr.every((num) => num > 0)
);

// arr.some(callback)
// Gibt true zurück, falls der callback bei mindestens einem element true ergibt
console.log(
    numArr.some(num => num > 8)
);

console.log(evenNums);
// arr.fill(neuerWert, Startindex, Endindex)
// Startindex ist inkludiert endindex nicht
evenNums.fill(Math.random() * 20, 3);
console.log(evenNums);
let emptyArr = new Array(20);
emptyArr.fill(5, 0, 3);
console.log(emptyArr);

// Im Kombi mit .forEach() können wir unser Array mit Zufallswerten füllen
emptyArr.forEach((number, index) => {
    let randomNumber = Math.floor(Math.random()* 50) +1;
    emptyArr.fill(randomNumber, index);
});
console.log(emptyArr);


// Schreibe eine Funktion namens "filterAndPrintOddNumbers", die ein Array von Zahlen
// entgegennimmt und alle ungeraden Zahlen filtert. Anschließend soll die gefilterten
// Zahlen ausgeben.
// (filter) und arrow Functions

// filterAndPrintOddNumbers ist eine Arrow Function, die ein Array von Zahlen
// entgegennimmt

// Mit der filter Methode werden alle ungeraden Zahlen im agegebenen Array 'arr' gefiltert

// Die gefilterten Zahlen werden dann mit 'forEach' iterriert und ausgegeben