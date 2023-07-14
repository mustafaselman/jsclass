// //let,const,var (başlıklar)
// // let a = 3 ; (number)
// // let b = "mustafa" (string)
// // let c = [1,2,3,4,5] (array)
// // let d = { ad:"mustafa",soyad:"onal"} (object)

// // const cars = ["BMW","Volvo",3,{ad:"mustafa",soyad:"onal",yas:3}]
// // console.log(cars)
// // console.log(cars[0])
// // console.log(cars.length)
// // console.log(cars[3]["ad"])

// // const fruit = ["elma","portakal","şeftali"]
// // let deger = fruit.toString()
// // console.log(deger)
// // console.log(deger[0])

// // const fruit = ["elma","portakal","şeftali"]
// // console.log(fruit.join(" - "))

// // const fruit = ["elma","portakal","şeftali"]
// // const value = fruit.pop()
// // console.log(fruit,value)

// // const fruit = ["elma","portakal","şeftali"]
// // const value = fruit.push("kiwi")
// // console.log(fruit,value)

// // const fruit = ["elma","portakal","şeftali"]
// // const value = fruit.shift()
// // console.log(fruit,value)

// // const fruit = ["elma","portakal","şeftali"]
// // const value = fruit.unshift("kivi")
// // console.log(fruit,value)
// // fruit[0] = "degiştir"
// // console.log(fruit)
// // fruit[3] = "degiştir"
// // console.log(fruit)
// // console.log(fruit.length)
// // console.log(fruit[fruit.length-1])
// // const fruit2 = ["nar","portakal"]
// // const total = fruit.concat(fruit2,["ekleme"])
// // console.log(total)

// //splice değeri çıkarılan değerleri döndürür
// // const fruits = ["elma","portakal","şeftali","mango"]
// // const value= fruits.splice(2,0,"limon","nar")
// // console.log(fruits)
// // console.log(value)

// // const fruits = ["elma","portakal","şeftali","mango"]
// // const total = fruits.slice(1)
// // console.log(total)

// // const fruits = ["Banana","Orange","Apple","Mango"]
// // console.log(fruits.sort())
// // console.log(fruits.reverse())

// // const numbers = [40,100,1,5,25,10]
// // console.log(numbers.sort(function(ahmet,berkay){return berkay-ahmet}))

// // console.log(Math.random())
// // const numbers = [40,100,1,5,25,10]
// // console.log(numbers.sort(function(){return 0.5 - Math.random()}))

// const cars = [{
//     type:"Volvo", year: 2016
// },{
//     type:"Fiat", year:2001
// },{
//     type:"BMW",year:2010
// }]
// // console.log(cars)

// // console.log(cars.sort(
// //     function(a,b) {
// //         console.log(a)
// //         console.log(b)
// //         return a.year - b.year
// //     }
// // ))

// // console.log(cars.sort(
// //     function(a,b) {
// //         let x = a.type.toLowerCase();
// //         let y = b.type.toLowerCase();
// //         if(x<y) {return -1}
// //         if(x>y) {return 1}   
// //     }
// // ))

// const numbers = [45,4,9,16]
// let toplam = 0
// numbers.forEach(
//     function myFunction(value,index,array){
        
//         // console.log(`value değeri: ${value}`)
//         // console.log(`index değeri: ${index}`)
//         // console.log(`array değeri: ${array}`)
//         toplam = toplam + value
//         console.log(numbers[index])
//     }
// )
// console.log(toplam)

// const numbers1 = [45,4,9,16,25]
// const numbers2 = numbers1.map(myFunction)
// function myFunction(value,index,array){
//     return value * 2 
// }
// console.log(numbers2)

// const numbers = [45,4,9,16,25]
// const over18 = numbers.filter(myFunction)
// function myFunction(value,index,array){
//     return value > 18
// }
// console.log(over18)

// const fruits = ["Apple","Orange","Kiwi","Mango"]
// let position = fruits.indexOf("Apple") + 1
// console.log(position)

// const numbers = [4,9,16,25,29]
// let first = numbers.find(myFunction)
// function myFunction(value,index,array){
//     return value > 18
// }
// console.log(first)

// const numbers = [4,9,16,25,29]
// let first = numbers.findIndex(myFunction)
// function myFunction(value,index,array){
//     return value > 18
// }
// console.log(first)

// const array = Array.from("Tüm string diziye dönüşecek")
// console.log(array)
// const deger = "Tüm string diziye dönüşecek"
// let deger2 = deger.split()
// console.log(deger2)

const fruits = ["Apple","Orange","Kiwi","Mango"]
console.log(fruits.includes("Mango"))