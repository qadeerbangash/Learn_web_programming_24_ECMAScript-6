// //simple way access the object property
// let obj={
//     name:"Ali",
//     email:"abc@gmail.com"
// }
// let name=obj.name;
// console.log(name)
// let email=obj.email;
// console.log(email)
// . 
// . 
// . 
// . 
// . 
// //ES6 way (Object destructuring)
// let obj={
//     name:"Ali",
//     email:"abc@gmail.com"
// }
// let {name,email}=obj;
// console.log(name);
// console.log(email)





// //In Array, same process as object ,in array we target index no
// let arr=["Ahmed","Ali","khan"]
// let name1=arr[0]
// let name2=arr[1]
// console.log(name2)
// . 
// . 
// . 
// . 
// .
// //ES6 (Array destructuring)
// let arr=["Ahmed","Ali","khan"]
// let [n1,n2,n3]=arr;
// console.log(n3)




// //Function Expressions
// // simple way
// function hello(){
//     console.log("Hello World")
// }
// hello()
// . 
// . 
// . 
// . 
// .
//ES6
// let hello=function(){
//     console.log("Hello World")
// }
// hello()





// //Arrow Functions(ES6)
// //Not use a function keyword we use arrow(=>)
// let hello=() =>{
//     console.log("Hi! Hello")
// }
// hello()
// . 
// . 
// . 
// . 
// .
// //use return
// let hello=_ =>{    
//     return "Hi"
// }
// console.log(hello())
// . 
// . 
// . 
// . 
// .
// //Code more compress
// let hello=() => "Hello World"
// console.log(hello())
// . 
// . 
// . 
// . 
// .
// //when we pass a parameter
// let hello=(name) =>{
//     console.log(`Hello ${name}`)
// }
// hello("Ali")
// . 
// . 
// . 
// . 
// .
// // more smallest (when we pass a single parameter,without bracket)
// let hello=name =>{
//     console.log(`Hello ${name}`)
// }
// hello("Ali")
// . 
// . 
// . 
// . 
// .
// //when we use more than one parameter
// let hello=(name1,name2) =>{
//     console.log(`Hello ${name1} and ${name2}`)
// }
// hello("Ahmed","Ali")
// . 
// . 
// . 
// . 
// .
//CallBack funtion
// setInterval(()=>console.log("hello"),3000) //This function get 2 values 
// . 
// . 
// . 
// . 
// .
// //Now i Creat a function ,which get the data from firebase
// let getData=()=>{
//     firebase.database().ref("/").on("child_added",(data)=>{
//         console.log(data.val())
//     })
// }
// getData()
// . 
// . 
// . 
// . 
// .
// This is a high order function because we call the function in the parameter of function
// let getData=(render_data)=>{
//     setTimeout(() => {
//         render_data("Ahmed")
//     }, 4000);
// }
// let render_data=(name)=>{
//     console.log(name)
// }
// getData(render_data)
// . 
// . 
// . 
// . 
// .




//Array Function
// High order Function 
//let objects in array
// let arr=[{name:"Ali",age:15},{name:"Bilal",age:20}]
// //Filter Function
// let f=arr.filter(function (a){
//     return a.age==15
// })
// console.log(f)
// . 
// . 
// . 
// . 
// .
// // use arrow Function 
// let arr=[{name:"Ali",age:15},{name:"Bilal",age:20}]
// let f=arr.filter(a=>a.age==20)
// console.log(f)
// . 
// .
// let arr=[{name:"Ali",age:15},{name:"Bilal",age:20}]
// let f=arr.filter(a=>true)
// // let f=arr.filter(a=>true)
// console.log(f)
// . 
// . 
// . 
// . 
// .
//Search
//We search any word
// let name="Ahmed"
// let search='A'
// //startsWith
// if(name.startsWith(search)){
//     console.log(name)
// }      //out put is ahmed
// . 
// .
// let name="Qadeer"
// let search='r'
// //endsWith
// if(name.endsWith(search)){
//     console.log(name)
// }  
// . 
// . 
// . 
// . 
// .
// Map Function 
// let arr=[2,3,4,5];
// console.log(arr)
// let mul=arr.map(a=> a*2)
// console.log(mul)
// . 
// .
// //use map we get data in table
// let arr=[{name:"Ali"},{name:"Ahmed"}]
// let mul=arr.map(a=>{
//     document.getElementById('table').innerHTML=a.name
// })
// console.log(mul)





// // Fetch 
// //When we get and updata the data to server ===using fatch 
// //Just Example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data=> console.log("Result",data))
//     .catch(err=> console.log("Error",err))

// . 
// .
// // Another Way ====use async and await keywords
// async function getData(){
//     let data =await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data)
// }
// . 
// .
// .
// //We want data in the function
// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(function(result){
//              console.log("Result",result)
//             })
//         .catch(function(err){
//              console.log("Error",err)
//             })
// }
// getData()




// // Constructor function.....Simple way .....ES5
// function student(name,email){
//     this.name=name;
//     this.email=email
// }
// let student1= new student("Ali","Ali@gmail.com")
// console.log(student1)
// . 
// .
// . 
// .
// // ES6 ......Classes
// class student {
//     constructor(name,email){
//         this.name=name;
//         this.email=email
//     }
// }
// let student1= new student("Ali","Ali@gmail.com")
// console.log(student1)





// // Add To Cart 
// function addToCart(){
//     var image=document.getElementById('image')
//     var price =document.getElementById('price')

//     var product ={
//         image,
//         price
//     }
//     var arr=[];
//     arr.push(product)
//     localStorage.setItem('cart',arr)
// }







