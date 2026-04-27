// 課題1
let nickname = 'ごっしー';
let age = 28;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// 2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

// 3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// 4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// 5
let sum = 0;
let i = 0
for( ; i < playerList.length ; i++) {
  sum += playerList[i].age;
}
ave = sum / i;
console.log(ave);

// 6
function sayHello() {
  console.log('Hello');
}
sayHello();

const sayWorld = function() {
  console.log('World');
}
sayWorld();

// 7
user.birthday = '2000-09-27'
user.sayHello = function() {
  console.log('Hello!')
}
console.log(user.birthday);
user.sayHello();

// 8
let calc = {};
function add(x, y) {
  console.log(x + y);
}
add(1, 6);

function subtract(x, y) {
  console.log(x - y);
}
subtract(11, 1);

function multiply(x, y) {
  console.log(x * y);
}
multiply(7, 7);

function divide(x, y) {
  console.log(x / y);
}
divide(30, 6);

// 9
function remainder(x, y) {
  console.log(x + 'を' + y + 'で割った余りは' + x % y + 'です。');
}
remainder(5,3);

// 10
/*
変数xのスコープは関数fooで、スコープ外から変数xを参照しようとしてエラーが出ている。
もし、エラーを解消するなら変数xを関数fooの外側で宣言しグローバル変数とするか、
console.logをfoo内で実行する必要がある。
*/

//応用編
// 1
console.log(Math.floor(Math.random()*10));

// 2
setTimeout(console.log('Hello World!'),3000);

// 3
num = Math.floor(Math.random()*100) - Math.floor(Math.random()*100);
console.log(num);
if(0 < num) {
  console.log('num is greater than 0');
} else if(num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

// 4
let numbers = [];
for(let i = 0; i < 100 ; i++) {
  numbers[i] = i;
}
console.log(numbers);

// 5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i < mixed.length; i++) {
  console.log(mixed[i])
  if(!(typeof mixed[i] === 'number')) {
    console.log('not number')
  } else if(mixed[i]%2 === 0) {
    console.log('even');
  } else if(mixed[i]%2 === 1) {
    console.log('odd');
  }
}