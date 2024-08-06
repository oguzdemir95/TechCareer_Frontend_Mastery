// alert("External JS")
// window.alert("External JS")

// Log
// console.log("Log");

// Warning
// console.warn("Warning");

// Info
// console.info("Info");

// Error
// console.error("Error");

//////////////////////////////////////////////
// Variable (Global)
// var kelime="Js Tutorial";
// console.log(kelime);
// // alert(kelime)

// // Hoisting
// kelime44="Kelimeler";
// var kelime44;

// var sayi=44;
// console.log(sayi);
// var sayi=44.23;
// console.log(sayi);

// var karar=true;
// console.log(karar);

// // Let
// let kelime2="Math"
// console.log(kelime2);

// // Const
// const kelime4="Math"
// console.log(kelime4);

// Operators
// let number1=11;
// let number2=2;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);
// console.log(number1**number2);

// && Ve || Veya ! Değil > >= < <=
// Atama
// == Eşittir (Türüne bakmaksızın)
// === Eşittir (Türüne bakarak)

////////////////////////////////////////////////////
// Kullanıcıdan veri alma
// let user1=Number(prompt("Lütfen 1. sayıyı giriniz"));
// let user2=parseInt(prompt("Lütfen 2. sayıyı giriniz"));

// console.log(user1+user2);
// console.log(user1-user2);
// console.log(user1*user2);
// console.log(user1/user2);
// console.log(user1%user2);
// console.log(user1**user2);
//////////////////////////////////////////////////////////

// Math
// let user=Number(prompt("Lütfen 1. sayıyı giriniz"));
// console.log("Pi: "+Math.PI);
// console.log("E: "+Math.E);
// console.log("Mutlak Değer: "+Math.abs(user));
// console.log("Karekök: "+Math.sqrt(user));
// console.log("Kare: "+Math.pow(user,2));

// console.log("Yuvarla: "+Math.round(7.3));
// console.log("Yuvarla: "+Math.round(7.5));
// console.log("Aşağı Yuvarla: "+Math.floor(8.9));
// console.log("Yukarı Yuvarla: "+Math.ceil(8.1));

// console.log("Rastgele: "+Math.random());
// console.log("Rastgele: "+Math.random()*4+1);
// console.log("Rastgele: "+Math.floor(Math.random()*4+1));


// console.log("Sin: "+Math.sin(45));
//////////////////////////////////////////////////////////

// TypeOf
// let variable1=44;
// console.log(typeof variable1);

// variable1=String(44);
// console.log(typeof variable1);

// variable1=true;
// console.log(typeof variable1);

// variable1=()=>{};
// console.log(typeof variable1);
//////////////////////////////////////////////////////////

// Undefined
// let data;
// console.log(data);
//////////////////////////////////////////////////////////

// NaN
// let data1=44/22;
// console.log(data1);

// data1=44/"22";
// console.log(data1);

// data1=44/"abc";
// console.log(data1);

// if(isNaN(data1)){
//     console.log("Lütfen sayı giriniz.");
// }
//////////////////////////////////////////////////////////

// Infinity
// console.log(0/44);
// console.log(44/0);
//////////////////////////////////////////////////////////

// Escape
let escape1="1.Alan '2.Alan";
console.log(escape1);

escape1='1.Alan \'2.Alan';
console.log(escape1);

escape1="1.Alan \n\t'2.Alan\u00a9";
console.log(escape1);
