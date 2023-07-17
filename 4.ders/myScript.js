// js dates

// const myDate = new Date()
// console.log(myDate)
// //getfullyear (yıl)
// console.log(myDate.getFullYear())
// //getmonth 0-11 (ay)
// console.log(myDate.getMonth())
// //getdate (gün)
// console.log(myDate.getDate())
// //saat dakika saniye
// console.log(`Şu an saat ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`)

//js math

// //yanlış kullanım
// const myMath = new Math()
// console.log(myMath.round(4.6))

//en yakın tam sayıya yuvarlama
// console.log(Math.round(4.5))

// //bir üst sayıya yuvarlama
// console.log(Math.ceil(4.1))

// //bir alt sayıya yuvarlama
// console.log(Math.floor(4.943545))
// console.log(Math.floor(-1.6))

// //tam sayıyı al
// console.log(Math.trunc(4.93280923))

// //karesini al
// console.log(Math.pow(8,2))

// //karekök
// console.log(Math.sqrt(64))

// //en küçüğünü bulur
// console.log(Math.min(0,150,30,-20))

// Math.random();

//js boolean

// console.log(10>9)
// //değeri olan her şey boolean cinsinde true dur
// console.log(Boolean(-1))

// let x = 0 ;
// console.log(Boolean(x))

// let y = new Boolean(1)
// console.log(y)

// let z = "";
// console.log("z değeri",z)
// console.log(Boolean(z))

// let q;
// console.log("q değeri",q)
// console.log(Boolean(q))

// js comparison 

// let x = 8 ; //atama
// console.log(x == 10) //karşılaştırma

// //değer olarak eşit data tipiolarak eşit değil
// let y = "34"
// console.log(y == 34)

// console.log(y === 34)

// let z = "88"
// console.log(z != 88)

// console.log(z !== 88)

// let a = 10;
// let b = "9";
// console.log(a <= b)

// && (and-ve işareti -> ikisi de doğru ise doğru)
// || (or-veya işareti ->ikisinden biri doğru ise doğru)

// let x = 8 ;
// let y = 10 ;
// console.log(!(x<5) || y>12)
// console.log(!(x<5 || y>12))

// //ternary operator
// let yas = 30
// let oyVerme = (yas<18) ? "Çok genç oy veremez" : "Oy vermek için yaşı yeterli"
// console.log(oyVerme)

// //nullish operator ??

// let name = "mustafa"
// let name2; //undefined
// let name3 = null
// let name4 = 0
// let name5 = ""
// let name6 = NaN
// let text = "isim yok"
// //ilk değer undefined/null değilse ilk değer yoksa ikinci değer yazar
// console.log("-------------")
// console.log(name ?? text)
// console.log(name2 ?? text)
// console.log(name3 ?? text)
// console.log(name4 ?? text)
// console.log(name5 ?? text)
// console.log(name6 ?? text)
// console.log("-------------")

// // ?? den farkı 0 "" veya NaN gelirse ikinci değeri yazar
// console.log(name || text)
// console.log(name2 || text)
// console.log(name3 || text)
// console.log(name4 || text)
// console.log(name5 || text)
// console.log(name6 || text)
// console.log("-------------")

// // || operatörünün tersine çalışır. Solda geçerli bir değer görürse sağdakini çalıştırır
// console.log(name && text)
// console.log(name2 && text)
// console.log(name3 && text)
// console.log(name4 && text)
// console.log(name5 && text)
// console.log(name6 && text)
// console.log("-------------")


// console.log("ali"/"ahmet") //numara olsaydı bölerdi ama değerler numara değil

// let deger;
// let deger2 = null;
// deger = 1;

//undefined ile null arasındaki fark ? ikisi arasındaki kullanım farkı ? avantaj /dezavantaj 

// undefined'ı sistem düzeyinde, beklenmeyen veya hata benzeri bir değer yokluğunu temsil etmek için ve null'u program düzeyinde, normal veya beklenen değer yokluğunu temsil etmek için düşünebilirsiniz.

//koşullu ifadeler- conditional statements
// if, else, else if, switch

// let hour = 12 ;
// if (hour < 18) {
//     console.log("iyi günler")
// }
// if(hour >= 18) {
//     console.log("iyi geceler")
// }

// let hour = 18 ;
// if (hour < 18){
//     console.log("iyi günler")
// }
// else {
//     console.log("iyi geceler")
// }

// let hour = 6 ;
// let izinVer = false ;
// if (hour<18) {
//     console.log("iyi günler")
// }
// else if (hour < 22) {
//     console.log("iyi akşamlar")
// } 
// else {
//     console.log("iyi geceler")
// }
// if (izinVer && (hour < 8)){
//     console.log("herkese günaydın")
// }

//switch use strict comparison (===)
//getDay haftanın günlerini 0-6 arasında veriyor (0 : pazar , 1:pzt ... 6:cumartesi)
let day;
switch(new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;
    case "1":
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    default:
        day = "Hatalı veri"
}
console.log(day)

if(new Date().getDay() === 0){
    console.log("Pazar")
}
else if (new Date().getDay() === 1){
    console.log("Pazartesi")
}
else if (new Date().getDay() === 2){
    console.log("Salı")
}
else if (new Date().getDay() === 3){
    console.log("Carsamba")
}
else if (new Date().getDay() === 4){
    console.log("Persembe")
}
else if (new Date().getDay() === 5){
    console.log("Cuma")
}
else if (new Date().getDay() === 6){
    console.log("Cumartesi")
}
else {
    console.log("Hatalı veri")
}