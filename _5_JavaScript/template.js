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
// let escape1="1.Alan '2.Alan";
// console.log(escape1);

// escape1='1.Alan \'2.Alan';
// console.log(escape1);

// escape1="1.Alan \n\t'2.Alan\u00a9";
// console.log(escape1);
//////////////////////////////////////////////////////////

// Sayısal İşlemler
// let number1=55.44;
// // document.writeln(number1);
// console.log(number1);
// console.log(typeof(number1));
// console.log(Number(number1));
// console.log(parseInt(number1));
// console.log(parseFloat(number1));

// // Normal Gösterim
// let bilimsel=1300000;
// console.log(bilimsel);

// // Bilimsel Gösterim
// bilimsel=13E+5;
// console.log(bilimsel);
// bilimsel=13E-5;
// console.log(bilimsel);

// const number2=1453.1234;

// console.log(number2.toExponential(1));

// // 10'luk Tabana Çevirme
// let binary=0b0100101101010;
// console.log(binary);

// let octa=0o76511;
// console.log(octa);

// let decimal=123456;
// console.log(decimal);

// let hexadecimal=0xfbc12;
// console.log(hexadecimal);

// // 10'luk Tabandan Çevirme
// let number3=4444;
// let binary3=number3.toString(2);
// console.log(binary3);

// let octa3=number3.toString(8);
// console.log(octa3);

// let hexa3=number3.toString(16);
// console.log(hexa3);

// // Fixed
// const number4=1234.56789
// console.log(number4.toFixed(2));
//////////////////////////////////////////////////////////

// Metinsel İşlemler
// let vocabulary="Html5, CSS3, javascript, jquery, Html5";
// vocabulary=String(vocabulary);
// vocabulary=vocabulary.trim();

// console.log(vocabulary);
// console.log(vocabulary.length);
// console.log(vocabulary.trim());

// console.log(vocabulary.toUpperCase());
// console.log(vocabulary.toLowerCase());

// console.log(vocabulary.startsWith("H"));
// console.log(vocabulary.endsWith("y"));

// console.log(vocabulary.concat("-INC"));
// console.log(vocabulary.replace("jquery","React JS"));

// console.log(vocabulary.substring(4));
// console.log(vocabulary.substring(1,3));

// console.log(vocabulary.indexOf("Html5"));
// console.log(vocabulary.lastIndexOf("Html5"));

// console.log(vocabulary.charAt(0));
//////////////////////////////////////////////////////////

// Functions
// function parametresizReturnsuz(){
//     console.log("Parametresiz Returnsuz");
    
// }
// parametresizReturnsuz();

// function parametreliReturnsuz(adi,soyadi,sehir){
//     console.log("Parametreli Returnsuz: "+adi+" "+soyadi+" "+sehir);
    
// }
// parametreliReturnsuz("Oğuzhan","Demir","Ankara");

// function parametresizReturnlu(){
//     return "Parametresiz Returnlu";
    
// }
// const data3=parametresizReturnlu();
// console.log(data3);

// function parametreliReturnlu(adi,soyadi,sehir){
//     // return "Parametresiz Returnlu" + " "+adi+" "+soyadi+" "+sehir;
//     return `Parametresiz Returnlu:  ${adi} ${soyadi} ${sehir}`;

// }
// const data4=parametreliReturnlu("Oğuzhan","Demir","Ankara");
// console.log(data4);
///////////////////////////////////////////////////////////////////
(function(){
    console.log("Immedia Anonymous Function");
})();

(()=>{
    console.log("Immedia Arrow Function");
})();

// Normal Function
// function normal(){
//     console.log("Normal Function");
// }
// normal();

// // Anonymous Function
// const anonymousFunction = function(){
//     console.log("Anonymous Function");
// }
// anonymousFunction();

// // Anonymous Function
// const arrowFunction = ()=>{
//     console.log("Arrow Function");
// }
// arrowFunction();











