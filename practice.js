// var i = 0;
// for(i = 0; i < 5; i++){}
// console.log(i)


// var i = 5;
// for (; i < 5; i++) {
//  console.log(i);
// }



// var name = "Rakib";
// name = "Rakibul Hossain";
// console.log(name);



// var givenMoney = 50;
// var countingCost = 10;
// var div = givenMoney / countingCost;
// console.log(div);
// var mul = givenMoney * countingCost;
// console.log(mul);
// var add = givenMoney + countingCost;
// console.log(add);
// var modules = givenMoney % countingCost;
// console.log(modules);



// var i = 40;
// while(i < -50) {
//     console.log(i)
//     i--;
// }



// for(var i =1; i <=20; i++){
//     console.log(i)
// }



// var arr = [45,3,34,56,78,3,2];
// console.log(arr.indexOf(56));



// var name = ["Rakib", "shakib", "Naqib"];
// var newNameAdded = name.indexOf("shakib")
// console.log(newNameAdded);
// name[1] = "Bakkar";
// console.log(name);



// var num;
// console.log(num);


// var arr = [45,56,67,78,12];
// arr.push(100);
// console.log(arr);



// var arr = [45,56,67,78,12];
// arr.pop()
// console.log(arr);



// var arr = [45,56,67,78,12];
// arr.unshift(100);
// console.log(arr);



// var arr = [45,56,67,78,12];
// arr.shift(100);
// console.log(arr);



// ----------------- about condition-------------------

// var x = 5000;
// if(x >= 60000){
//     console.log("I will buy iphoneXr");
// } else if (x < 80000) {
//     console.log("I will buy gaming laptop")
// }
// var x = 5000;
// if (x > 80000) {
//     console.log("I will buy iphone");
// } else if (x > 60000) {
//     console.log("I will buy gaming laptop")
// } else if (x > 40000) {
//     console.log("I will buy lenovo Laptop");
// } else if (x > 20000) {
//     console.log("second hand laptop");
// } else {
//     console.log("tor jehetu tk nai, so akhn boisha mori kha");
// }



// ----------------- about loop-------------------

// var text = 1;
// while(text <= 39){
//     console.log(text, "ajk amr mon valo nei");
//     text++;
// }
// for(var text = 1; text <= 39; text++){
//     console.log(text,"Ajk amr mon valo nei");
// }



// ----------------- about object-------------------

// var myDetails = {
//     name: "Rakib",
//     age : 25,
//     institute: "Daffodil International University",
//     address: "Mirpur-11.5"
// }
// console.log(myDetails)
// --------- Keys---------------
// const key =Object.keys(myDetails);
// console.log(key);
// -------- values--------------
// const value = Object.values(myDetails)
// console.log(value);
// --------- For loop-----------
// for(var i = 0; i < key.length ; i++){
//     const propertyName = key[i];
//     const propertyValues = myDetails[propertyName];
//     console.log(propertyName, propertyValues);
// }
// -------- For in loop---------
// for(var infoDetails in myDetails) {
//     const values = myDetails[infoDetails]
//     console.log(infoDetails, values)
// }
// var smartphone = { brand: "iPhone", model: "13" };
// console.log(smartphone.brand);



// Unit Convert Inch to feet

// function feet(inch) {
//     const yourFeet = inch/12;
//     return yourFeet;
// }
// const myFeet = feet(70);
// console.log(myFeet.toFixed(1));



// Unit Convert miles to kilometer

// function miles(km) {
//     const kilometer = km/1.609;
//     return kilometer;
// }
// const dhakaToCox = miles(350);
// console.log(dhakaToCox.toFixed(2));



// Even and odd number

// function isEven(num) {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false;
//     }
// }
// const myEvenNumber = isEven(50)
// console.log(myEvenNumber);
// const hisEvenNumber = isEven(55);
// console.log(hisEvenNumber);



// Leap Year

// function isLeapYear(year) {
//     if(year % 4 === 0){
//         console.log("Your year is leap year")
//     } else {
//         console.log("This year is not a leap year")
//     }
// }
// const myLeapYear = isLeapYear(1997);
// console.log(myLeapYear);

// function isLeapYear(year) {
//     if(year % 4 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// const hisLeapYear = isLeapYear(1996);
// console.log(hisLeapYear);

// function isLeapYear(year) {
//     if(year % 4 === 0){
//         return true;
//     } 
//         return false;
// }
// const hisLeapYear = isLeapYear(1999);
// console.log(hisLeapYear);

// function isLeapYear(year) {
//         if((year%4 === 0 && year%100 !== 0 || year%400 === 0)){
//             console.log("Your year is leap year")
//         } else {
//             console.log("This year is not a leap year")
//         }
//     }
//     const myLeapYear = isLeapYear(2000);
//     console.log(myLeapYear);



// Calculate Sum of all numbers of an array

function getSumOfAnArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}

// Get Odd Numbers of an array and get odd Sum of an array
function getOddNumbers(number) {
    let oddNumArray = [];
    for (var i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index]
        if (element % 2 !== 0) {
            // console.log(index, element)
            oddNumArray.push(element);
        }
    }
    return oddNumArray;
}

const array = [6, 17, 9, 1996, 1999];
// const luckyNumber = getSumOfAnArray(array)
// console.log(luckyNumber);
const oddNumbers = getOddNumbers(array);
console.log(oddNumbers)
getSumOfAnArray(oddNumbers);














