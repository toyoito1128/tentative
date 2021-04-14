let message = "hello world";
console.log(message);
message = "good night world";
console.log(message);
/////////
let say = "hello";
console.log(say);
say = "Goodbye";
console.log(say)

console.log(typeof 2)

const price = 1000;
const tax = 0.1;
const mul = price * tax;
console.log(mul);

const a = 80 + 90 + 60 + 85 + 100;
const b = 40 + 30 + 50 + 25 + 60;
console.log(a)
console.log(b)

if (a >=300 && b>=300) {
  console.log("素晴らしい");
} else if (a >= 300 || b >= 300) {
  console.log("普通");
} else if(a<300&&b<300){
  console.log("頑張りましょう");
}

const person = "中吉";

switch (person) {
  case "大吉":
    console.log("大吉です");
    break;
  case "中吉":
    console.log("中吉です");
}

// const A = 80;
// const B = 15;
// const C = 55;

// function A(score) {
//   const "もう少し頑張りましょう" = number <= 30;
//   return "もう少し頑張りましょう";
// }

// console.log(A);

function advice(name, score) {
  if (score >= 70 && score <= 100) {
    return `${name}君よくできました`;
  } else if (score >= 30 && score < 70) {
    return `${name}君普通です`;
  } else if (score >= 0 && score < 30) {
    return `${name}君もう少し頑張りましょう`
  }
}
console.log(advice("A", 80));
console.log(advice("B", 15));

const array = ["A", "B", "C"];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// console.log(array.length);
array.push("D");
array.unshift("Z");
console.log(array)

array.pop();
console.log(array);

array.shift();
console.log(array);

// array.splice(0,2);
// console.log(array);

const newarray = array.concat(["d", "e"]);
console.log(newarray)

const newArray = ["x", "y", "Z", ...array];
console.log(newArray);

const Newarray = ["x", "y", "Z"].concat(array);
console.log(Newarray)


const Array = [10, 30, 5, 40];
const found = Array.find(function (element){
  return element>20
});
console.log(found);

const ar = ["a", "b", "c", "d", "e"];
console.log(ar.slice(1, 3));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const num = numbers.map((item) =>{
//   if (item % 2 == 0) {
//     return item * 2;
//   }
//   return item;
// });
// console.log(num);

const num = numbers.map(function (item) {
  if (item % 2 == 0) {
    return item * 2;
  }
  return item;
})
console.log(num);

const lists = ["太郎", "次郎", "三郎","四郎"];
for (let i = 0; i < lists.length; i++){
  console.log(lists[i]);
}

let c = 0;
while (c < 10) {
  c = c + 1;
  console.log(c)
}

const test = ["国語", "数学", "英語"];
test.push("理科", "社会");
console.log(test);
console.log(test.length);

// for (let i = 1; i <= 50; i++){
//   if (i  % 3 == 0) {
//     console.log("Fuzz");
//   } else if (i  % 5 == 0) {
//     console.log("Buzz");
//   } else if (i  %15 ==0) {
//     console.log("FuzzBuzz");
//   }
// }

for (let i = 1; i <= 50; i++){
  if (i % 3 == 0&& i%5==0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let water = 1000;
const drink = 180;
while (water > 0) {
  console.log(water);
  water = water - drink;
}
console.log("飲み干した");

const strings = "HTML.CSS.Javascript".split(".").join(".");
console.log(strings);

const str = "プロぐらミング"
console.log(str.length);
console.log(str.slice(2));

// alert("hoho");
// confirm("haha");

// const result = prompt("あああ");
// console.log(result);


// function tell() {
//   alert("Hello");
// }
// setTimeout(tell, 1000);


const user = {
  name: "太郎",
  age: 20,
  say: function () {
    console.log(this.name); //thisはuserを指します
  },
};

user.say();

// const school = {
//   name: "COACHTECH",
//   month: 2,
//   skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
//   createSentense() {
//    console.log(nameはmonthか月でskillを学ぶことができます)
//   },
// };

// console.log(school.createSentense());


const tete = {
  tt: function () {
    console.log("hello");
  },
};

tete.tt();

let namearray = ["が", "ぎ", "ぐ", "げ", "ご",];
for (let i = 0; i < namearray.length; i++){
  for (let j = 0; j < 2; j++){
    console.log(namearray[i]);
  }
}

const ageToType = (age) => {
  if (age < 18) {
    return "子供";
  } else if (age >= 18 && age < 65) {
    return "大人";
  } else {
    return "お年寄り";
  }
};

console.log(ageToType(68));

// for (let i = 1; i <=30; i++){
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0 ) {
//     console.log("Fizz");
//   } else {
//     console.log(i)
//   }
// }

const FizBuz = (x) => {
  if (x % 15 == 0) {
    return "FizBuz";
  } else if (x % 5 == 0) {
    return "Buz";
  } else if (x % 3 == 0) {
    return "Fiz";
  } else {
    return x;
  }
}

for (i = 1; i < 16; i++){
  console.log(FizBuz(i));
}

const oml = {
  name: "太郎",
  age: 20,
  you: function () {
    console.log(this.age);
  },
}
oml.you();

"こんに".length;

console.log(typeof "a")

const aray=[1, 2, 3, 4, 5];
console.log(aray[1])

const downtown = {
  name: "ダウンタウン",
  boke: "松本",
  tukkomi: "浜田",
  method() {
    console.log(`コンビ名は${this.name}です。ボケは${this.boke}です。`);
  }
}

downtown.method();


const nameCall = (name) => {
  return `こんにちは${name}さん`;
}
console.log(nameCall("俺"));

const visitCount = (name, visitCount) => {
  return `こんにちは${name}さん。${visitCount}回目の訪問です。`;
}

console.log(visitCount("おお", "1"));
console.log(visitCount("ええ", "2"));


const souryou = (cost) => {
  if (cost >= 5000) {
    return `あなたのカートは、${cost}分の商品が入って無料`;
  } else {
    return `あなたのカートは${cost}分の商品が入って有料`;
  }
}
console.log(souryou(5000));

console.log(souryou(4000));


// let fruit = ["apple", "melon", "orange"];
// fruit.forEach(function (element) {
//   console.log(element);
// });

let fruit = ['Apple', 'Melon', 'Orange'];

fruit.forEach(function(element, index, arra){
  console.log('Index:' + index);
  console.log('Element:' + element);
  console.log('Array:' + arra);
});

const aae = ["松", "竹", "梅"];
for (let i = 0; i < aae.length; i++){
  console.log(aae[i]+"ちゃんです");
}

// for (const class of aae){
//   console.log(`${class}ちゃんです`);
// }


// const school = {
//   name: "coachtech",
//   month: 2,
//   skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
//   createSentense() {

//   }
// }


const numberS = ["1", "2", "3", "4", "5"];
const mult = numberS.map((item)=> {
  if (item % 2 === 0) {
    return item * 2;
  } else if (item % 2 === 1) {
    return item;
  }
})
console.log(mult);


const dt = new Date();
console.log(dt);



const dd = new Date()
console.log(dd.getFullYear())

const df = new Date()
const month = df.getMonth()+1
console.log(month);


const arrays = ["あ", "い", "う", "え"];
arrays.forEach((ele, index)=>{
  if (ele == "い") {
    console.log(`${ele}は${index}番目です`);
  }
})

const school = {
  name: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
  createSentense() {
    let data;
    this.skills.forEach((skill, index) => {
      if (index == 0) {
        data = skill;
      } else {
        data = `と${skill}`;
      }
    });
    return `${this.name}は${this.month}ヶ月で${data}を学ぶことができます`;
  },
};

console.log(school.createSentense());


let da = new Date();
console.log(da);

let dad = new Date();
dad.setMonth(dad.getMonth() + 1);
console.log(dad);

// document.addEventListener("DOMContentLoaded", function () {
//   alert("ページが読み込みされました")
// })

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   alert("クリックされました");
// })

// const butt = document.getElementsByTagName("button")[0];
// butt.addEventListener("click", function () {
//   alert("クリック");
// })


const form = document.getElementById("form");
const input = document.getElementById("input");
const ul= document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach(todo => {
    add(todo);
  })
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

function add(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }
  if(todoText.length>0){
    const li = document.createElement("li");
    li.innerText = todoText; //liタグの中のテキストはinputタグに入れた値（value）
    li.classList.add("list-group-item");  //listの・を消すスタイル

    if (todo && todo.completed) {
      li.classList.add("text-decoration-line-through")
    }

    li.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      li.remove();
      saveData();
    })
    
    li.addEventListener("click", function () {
      li.classList.toggle("text-decoration-line-through");
      saveData();
    })

    ul.appendChild(li);　//liを追加する
    input.value = "";//追加したら、inputタグの中身は空欄にする
    saveData();
  }　
}

function saveData() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach(list => {
    let todo = {
      text: list.innerText,
      completed:list.classList.contains("text-decoration-line-through")
    };
    todos.push(todo);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}





