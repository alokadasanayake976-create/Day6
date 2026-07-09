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
//let heading = document.getElementById("heading");

// heading.innerText = "Sharada";

// console.log(heading.);
// let number = 0;
// function changeHeadingIncrement() {
//     heading.innerText = "Sharada"+number++;
//     console.log("Clicked");
    
// }
// function changeHeadingDecremenet() {
//     heading.innerText = "Sharada"+ --number;
//     console.log("Clicked");
    
// }

// function changeHeading(){
//     let textInput = document.getElementById("inputText");
//     console.log(textInput.value);
    
// }

// function changeHeading() {

//     let txtInput = document.getElementById("inputText");

//     let userInput = txtInput.value; 

//     console.log(userInput);
    
//     let heading = document.getElementById("heading");

//     heading.innerText=userInput;

    
// }
// function btnSumOnAction() {
//     let input01 = document.getElementById("txtInput01").value;
//     let input02 = document.getElementById("txtInput02").value;

//     let sum = parseInt(input01)+parseInt(input02);
//     // let sum = Number(input01)+Number(input02);

//     document.getElementById("heading").innerText="SUM : "+sum

    

//     console.log(input01);
//     console.log(input02);
//     console.log(sum);

// }

// let customerList = [];

// function btnAddCustomerOnAction(){
//     let txtName = document.getElementById("txtName").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtSalary = document.getElementById("txtSalary").value;

//     let customer={
//         name:txtName,
//         address:txtAddress,
//         age:txtAge,
//         email:txtEmail,
//         salary:txtSalary
//     }

//     customerList.push(customer);

//     console.log(customerList);
      
// }

// function loadTable(){
//     let tblCustomers = document.getElementById("tblCustomers");

//     tblCustomers.innerHTML+=`<tr>
//             <td>Saman</td>
//             <td>Walana</td>
//             <td>15</td>
//             <td>saman@email.com</td>
//             <td>750000</td>
//         </tr>`

//     console.log(tblCustomers);
    
// }

//////////////////////////////////////////////////////////////////////////////////
//------------  Simple calculator-----------------
// const display = document.getElementById('display');

// function appendValue(input) {
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = '';
// }
 
// function calculate() {
//     try {
        
//         display.value = eval(display.value);
//     } catch (error) {
//         display.value = 'Error';
//     }
// }
//////////////////////////////////////////////////////////////////////////////////
//  const form = document.getElementById('userForm');
//         const tableBody = document.getElementById('tableBody');

    
//         form.addEventListener('submit', function(event) {
            
//             event.preventDefault();

            
//             const name = document.getElementById('userName').value;
//             const email = document.getElementById('userEmail').value;

            
//             const newRow = document.createElement('tr');

            
//             newRow.innerHTML = `
//                 <td>${name}</td>
//                 <td>${email}</td>
//             `;

            
//             tableBody.appendChild(newRow);

            
//             form.reset();
//         });
//////////////////////////////////////////////////////////////////////////////////////////////
//-------------------simple search bar ---------------------------
//   function searchItem() {
//             let input = document.getElementById("searchBox").value.toLowerCase();
//             let items = document.getElementById("myList").getElementsByTagName("li");
//             for (let i = 0; i < items.length; i++) {
//                 let text = items[i].textContent.toLowerCase();
//             if (text.includes(input)) {
//                     items[i].style.display = "";
//                 } else {
//                     items[i].style.display = "none";
//                 }
//             }
//         }
//////////////////////////////////////////////////////////////////////////////////////
////-----------------------Add student form------------------

function addStudent(){