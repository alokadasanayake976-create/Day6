// class Customer{
//     name;
//     age;
//     address;

//     constructor(name,age,address){
//         this.name =  name;
//         this.age =  age;
//         this.address = address;
//     }

// }
// const Customer1= new Customer("Aloka",20,"Horana");
//  console.log(Customer1);

// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20
                    
//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 200
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300
//         }
//     ],
//     father: {
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[2].name);
// console.log(customer2.father.name);
// console.log(customer2.items[0].variants[1].variants[2]);
//---------------------------------------------
//dom manupulation
//console.log(document);
// console.log(document.title);
let heading = document.getElementById("heading");

// heading.innerText = "Sharada";

// console.log(heading.);
let number = 0;
function changeHeadingIncrement() {
    heading.innerText = "Sharada"+number++;
    console.log("Clicked");
    
}
function changeHeadingDecremenet() {
    heading.innerText = "Sharada"+number--;
    console.log("Clicked");
    
}






 
