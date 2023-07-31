//get request

// class Request {
//     get(url) {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//             .catch((err) => console.log(err))
//     }
// }
// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums")


// class Request {
//     get(url) {
//         return new Promise((resolve,reject)=>{
//             fetch(url)
//             .then((response) => response.json())
//             .then((data) => resolve(data))
//             .catch((err) => reject(err))
//         })
        
//     }
// }
// const request = new Request();
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums = data;
//     console.log(albums)
// })
// .catch(err => console.log(err))

// class Request {
//     async get(url) {
//         const response = await fetch(url)
//         console.log(response)
//         const data = await response.json()
//         console.log(data)
//         return data;
//     }
// }
// const request = new Request();
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums = data;
//     console.log(albums)
// })
// .catch(err => console.log(err))

//post request

// class Request {
//     post(url,data) {
//         return new Promise ((resolve,reject) => {
//             fetch(url, {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8"
//                 }
//             })
//             .then((response) => response.json())
//             .then((data) => resolve(data))
//             .catch((err) => reject(err))
//         })
//     }
// }
// request = new Request();
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
// .then(response => console.log(response))
// .catch(err => console.log(err))

// class Request {
//     async post(url,data){
//         const response = await fetch(url,{
//             method:"POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         const responseData = await response.json()
//         return responseData
//     }
// }
// request = new Request();
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
// .then(response => console.log(response))
// .catch(err => console.log(err))

//put request

// class Request {
//     put(url,data) {
//         return new Promise((resolve,reject)=>{
//             fetch(url,{
//                 method: "PATCH",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type":"application/json; charset=UTF-8"
//                 }
//             })
//             .then((response)=>response.json())
//             .then((data)=>resolve(data))
//             .catch(err => reject(err))

//         })
//     }
// }
// request = new Request();
// request.put("https://jsonplaceholder.typicode.com/albums/8",{title: "mustafa"})
// .then(response => console.log(response))
// .catch(err => console.log(err))

// class Request {
//     delete(url) {
//         return new Promise((resolve,reject)=> {
//             fetch(url,{
//                 method:"DELETE"
//             })
//             .then(() => resolve("veri silme işlemi başarılı"))
//             .catch((err)=> {reject(err)})
//         })
//     }
// }
// request = new Request();
// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then((message)=>console.log(message))
// .catch((err)=>console.log(err))

//destructing

const vehicles = ["ford","mustang","fiat"]
// const vehicle1 = vehicles[0]
// const vehicle2 = vehicles[1]
// const vehicle3 = vehicles[2]
// console.log(vehicle1)

// const [,vehicle1,] = vehicles
// console.log(vehicle1)

// const person = {
//     name: "Mustafa",
//     age: 25,
//     location: "Ankara",
//     like: "Pizza"
// }
// const {name: name1, age} = person
// console.log(name1,age)

const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2023,
    color:"red"
}
// function myVehicle(vehicle){
//     const message = "My" + vehicle.type + " is a " + vehicle.color + " " + vehicle.brand + " " + vehicle.model + "."
//     console.log(message)
// }
// myVehicle(vehicleOne)

// function myVehicle({type,color,brand,model}){
//     const message = "My " + type + " is a " + color + " " + brand + " " + model + "."
//     console.log(message)

// }
// myVehicle(vehicleOne)

//spread operator

// const numberOne = [1,2,3]
// const numberTwo = [4,5,6]
// const numbersCombined = [...numberOne,...numberTwo,7,8]
// console.log(numbersCombined)

// const numbers = [1,2,3,4,5,6]
// const [one,two,...rest] = numbers
// console.log(rest)

// const myVehicle = {
//     brand: "ford",
//     model: "mustang",
//     color: "red"
// }
// const updateVehicle = {
//     type: "car",
//     year: 2023,
//     color: "yellow"
// }
// const updated = {...myVehicle,...updateVehicle}
// console.log(updated)