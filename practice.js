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

// function getSumOfAnArray(number) {
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         const index = i;
//         const element = number[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
// }

// Get Odd Numbers of an array and get odd Sum of an array
// function getOddNumbers(number) {
//     let oddNumArray = [];
//     for (var i = 0; i < number.length; i++) {
//         const index = i;
//         const element = number[index]
//         if (element % 2 !== 0) {
//             // console.log(index, element)
//             oddNumArray.push(element);
//         }
//     }
//     return oddNumArray;
// }

// const array = [6, 17, 9, 1996, 1999];
// const luckyNumber = getSumOfAnArray(array)
// console.log(luckyNumber);
// const oddNumbers = getOddNumbers(array);
// console.log(oddNumbers)
// getSumOfAnArray(oddNumbers);




// Calculate Factorial of a number using for loop
// Take ii out 5!
// function getFactorialFive(factorial) {
//     let mul = 1;
//     for(let i=1; i<=factorial; i++){
//          mul = mul * i;
//     }
//     return mul;
// }
// const setFactorialValue = getFactorialFive(5);
// console.log(setFactorialValue);



// Factorial using a while loop or a decrementing loop
// function decrementingFact(number){
//     let mul = 1;
//     for(let i = number; i >= 1; i--){
//         mul = mul * i;
//     }
//     return mul;
// }
// const reversWay = decrementingFact(5);
// console.log(reversWay);

// function reversFact(num) {
//     let mul = 1;
//     let i = num;
//     while (i >= 1) {
//         mul = mul * i;
//         i--;
//     }
//     return mul;
// }
// const whileReverseFact = reversFact(6);
// console.log(whileReverseFact);




// String

// let bandName1 = "pinKLand";
// let bandName2 = "pinkLand";
// if (bandName1.toLowerCase() == bandName2.toLowerCase()) {
//     console.log("valid entry")
// }
// else {
//     console.log("Invalid entry");
// }

// const songLyrics = "Tumi akasher buke, sorolotar protima. Tumi amr bukete bishalotar upoma"
// console.log("exist", songLyrics.includes("Tumi"));

// const songLyrics = "Tumi akasher buke, sorolotar protima. Tumi amr bukete bishalotar upoma"
// console.log("exist", songLyrics.indexOf("2mi"));

// const songLyrics = "Tumi akasher buke, sorolotar protima. Tumi amr bukete bishalotar upoma"
// console.log("exist", songLyrics.startsWith("Tumi"));

// const songLyrics = "Tumi akasher buke, sorolotar protima. Tumi amr bukete bishalotar upoma"
// console.log("exist", songLyrics.endsWith("upoma"));




// split, slice, substr, substring, concat, join

// const songLyrics = "Tumi akasher buke, sorolotar protima. Tumi amr bukete bishalotar upoma"
// const applySplit = songLyrics.split('');
// const applySplit = songLyrics.split(' ');
// const applySplit = songLyrics.split('.');
// console.log(applySplit);

// const songLyrics = "Tumi akasher buke, sorolotar protima. Tumi amr bukete bishalotar upoma"
// const applySlice = songLyrics.slice(4,13);
// console.log(applySlice);

// const songLyrics = "Tumi akasher buke, sorolotar protima. Tumi amr bukete bishalotar upoma"
// const applySubstring = songLyrics.substring(4,13);
// console.log(applySubstring);

// const firstName = "Akbar Hossain";
// const lastName = "Rakib";
// console.log(firstName.concat(' ',lastName));

// const elements = ["Akbar", "Hossain", "Rakib"];
// console.log(elements.join("-"));

// Math, abs, pow, round, ceil, floor, and random number
// let number1 = 70;
// let number2 = 120;
// console.log(Math.abs(number1 - number2));

// let fivePower = Math.pow(2,8);
// console.log(fivePower);

// let num = 4.499;
// console.log(Math.round(num));

// let num = 4.1;
// console.log(Math.ceil(num));

// let num  = 4.4;
// console.log(Math.floor(num));

// console.log(Math.random());




// Swap variable, swap without temp, destructing

// let a = 7;
// let b = 8;
// // const tem = a;
// // a = b;
// // b = tem;
// // console.log(a, b);

// // Destructing way
// [a, b] = [b, a];
// console.log(a, b);



// Write a function that will take 3 numbers will return the max number

// function maxNumber() {
//     const maximum = Math.max(9,17,6);
//     return maximum;
// }
// const outputMaxNUm = maxNumber();
// console.log(outputMaxNUm);



// Write a function that will take 3 parameters and will return the min number

// function minNumber(a,b,c) {
//     const minimumNum = Math.min(a,b,c);
//     return minimumNum;
// }
// const minimumNumber = minNumber(7,5,1);
// console.log(minimumNumber);




// Write a function to get the lowest number in an array

// function lowestNumber(number) {
//     lowest = number[0];
//     for(var i=0; i < number.length; i++){
//         let element = number[i];
//         // console.log(i,element);
//         if(element < lowest){
//             lowest = element;
//         }
//     }
//     return lowest;
// }
// const numberOfArray = [34, 45, 2, 5, 78];
// const lowestArrayNumber = lowestNumber(numberOfArray);
// console.log("The lowest Number",lowest);




// Reverse a string 

// function lovelySentence(love) {
//     for(var i = love.length-1; i>=0; i--){
//         let element =love[i];
//         console.log(element, i);
//     }
// }
// const saidMyWife = "I Love u my world";
// const happiestMoment = lovelySentence(saidMyWife);
// console.log(happiestMoment);




// Reverse words in a sentence

// function string(sentence) {
//     const joinSentence = [];
//     const splitWord = sentence.split(" ");
//     for(var i = splitWord.length-1; i>=0; i--){
//         const element = splitWord[i]
//         joinSentence.push(element);
// console.log(joinSentence);
//     }
//     const reversed = joinSentence.join(" ");
//     return reversed;
// }
// const str = "I love Allah and My Prophet";
// const outputStr = string(str);
// console.log(outputStr);




// Create a Fibonacci Series using a for loop

// const fibo = [0, 1];
// for (var i = 2; i <= 12; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);




// Quiz problem

// const mathRound = Math.round(Math.random()*10);
// console.log(mathRound);

// function add(a, b){
//     return a + b;
//   }
//   console.log(add("adam" + "eve"))




// Get part of an array and insert elements using splice

// const number = [23,34,45,56,67,12,89];
// const applySplice = number.splice(2,6);
// console.log(applySplice); 
// console.log(number);




// Remove duplicate items from an array

// function removeDuplicateItems(numbers) {
//     uniqueItems = [];
//     for (var i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (uniqueItems.includes(element) === false) {
//             uniqueItems.push(element);
//         }
//     }
//     return uniqueItems;

// }
// const number = [23, 34, 45, 56, 67, 12, 89, 89, 12, 67, -98, -34, -56, -34];
// const duplicateArrayRemove = removeDuplicateItems(number);
// console.log(duplicateArrayRemove);




// Write foo, bar, foobar if divisible by 3 or 5 or both

// for (var i = 0; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("foobar");
//     }
//     else if (i % 5 === 0) {
//         console.log("bar");
//     }
//     else if (i % 3 === 0) {
//         console.log("foo");
//     }
//     else {
//         console.log(i);
//     }
// }




// Use add and multiplication to calculate wood requirements
function makeCalculateForWeeding(biriyani, softDrinks, cigarate){
    const priceOfBiriyani = 350;
    const priceOfSoftDrinks = 12;
    const priceOfCigarate = 14;

    const totalCostOfBriyani = priceOfBiriyani * biriyani;
    const totalCostOfSoftDrinks = priceOfSoftDrinks * softDrinks;
    const totalCostOfCigarates = priceOfCigarate * cigarate;

    const totalCost = totalCostOfBriyani + totalCostOfSoftDrinks + totalCostOfCigarates;
    return totalCost;
}

const total = makeCalculateForWeeding(50, 50, 20);
console.log(total);


















