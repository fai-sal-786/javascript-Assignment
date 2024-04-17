// Q1: Given the array Number = [1,2,3,4,5] use the splice method to remove the second Element(2) from the array?

// var Number = [1,2,3,4,5]
// Number.splice(2, 1);
// console.log(Number);

// answer: [1,2,4,5]

// <----------------------------------------------------->

// Q2:Using the array fruits =["apple","banana","orange","kiwi","grape"], use the splice method to replace "orange" and "kiwi" with "strawberry" and "pineapple"?

// var fruits =["apple","banana","orange","kiwi","grape"]
// fruits.splice(2, 2, "strawberry","pineapple");
// console.log(fruits);

// answer:["apple","banana","strawberry","pineapple","grape"]

// <--------------------------------------------------------->

// Q3:Given the array colors =["red","green","blue","yellow","purple"] use the slice method to create a new array containing only "green" and "blue"?

// var colors =["red","green","blue","yellow","purple"];
// console.log(colors);
// var new_colors = colors.slice(1, 3);
// console.log(new_colors);

// answer:['red','green','blue','yellow','purple']
// answer:['green','blue']

// <-------------------------------------------------------------->

//Q4:Using the array number =[10, 20, 30, 40, 50] use the slice method to create a new array containing the last three elements?

// var  number =[10, 20, 30, 40, 50];
// console.log(number);
// var new_number = number.slice(2,5);
// console.log(new_number);

// answer:[10, 20, 30, 40, 50]
// answer:[30, 40, 50]

// <-------------------------------------------------------------------->

// Q10: Given the array fruits =['apple','banana','cherry','date','fig'] use the slice method to create a new array containing only 'cherry' and 'date'?

// var fruits =['apple','banana','cherry','date','fig']
// console.log(fruits);
// var new_fruits = fruits.slice(2, 4);
// console.log(new_fruits);

// answer:['apple','banana','cherry','date','fig']
// answer:['cherry', 'date']

// <--------------------------------------------------------------------------->

// Q14: Using the array numbers = [5, 10, 15, 20, 25] use the splice method and prompt to insert a number at an index provided by the user?

// const numbers = [5, 10, 15, 20, 25];

// const numberToInsert = (+prompt("Enter a number to insert:"));

// const indexToInsert = (+prompt("Enter the index where the number should be inserted:"));

// if(indexToInsert >= 0 && indexToInsert <= numberToInsert.length ){

    // number.splice(indexToInsert, 0, numberToInsert);

    // console.log("Array after insertion:", numbers);
// }else{
    // console.log("Invalid index provided.");

// }

// answer: Invalid index provided.

// <----------------------------------------------------------------------------->

// Q11: Given the array temperatures = [72, 78, 82, 88,95], use a for loop to find and print the number of days with temperatures above 80?

// const temperatures = [72, 78, 82, 88, 95];
// 
// let countAbove80 = 0;
// 
// for(i = 0; i < temperatures.length; i++){
    // if(temperatures[i] > 80) {
        // countAbove80++;
    // }
// }
// console.log("Number of days with temperatures Above 80:", countAbove80);

// answer:Number of days with temperatures Above 80: 3

// <----------------------------------------------------------------------------->
// Q16:Given the array fruits =['apple','banana','cherry','date','fig'] use the splice method to remove a fruit of the users choice.Ask the user to enter the index of the fruit they want to remove?

// let fruits = ['apple','banana','cherry', 'date','fig'];

// console.log(fruits);

// let index = prompt("Enter the index  of the fruit you want to remove (0 to " + fruits.length -1) + "):)";

// index = parseInt(index);

// if(index >= 0 && index < fruits.length){

    // let removedFruit = fruits.splice(index, 1);

    // console.log("Removed fruit:", removedFruit);

    // console.log("Update  array of fruit:",fruits);
// }else{
    // console.log("Invalid index. please enter a valid index.");

// }

// Q15: using  the array values = [5, 10, 15, 20, 25], ask the user  to enter a number. use a for loop and  the slice method to create a  new array containing only the values less than the user input.?

// let values = [5, 10, 15, 20, 25];

// console.log(values);

// let userinput = prompt("Enter a number:");

// userinput = parseInt(userinput);

// let newArray = [];

// for(let i = 0; i < values.length; i++){

    // if(values[i] < userinput) {

        // newArray.push(values[i]);
    // }
// }
// console.log("New array containing the values less than", userinput + ":",  newArray);

// <------------------------------------------------------------------->
// Q13: create an array called words with different words. use a for loop and the splice method to remove words that contain more than five letters.?

// let words = ['apple','banana','cherry','date','fig','grape','kiwi','mango','orange'];

// console.log(words);

// for(let i = words.length-1; i >= 0; i--){

    // if (words[i].length > 5){

        // words.splice(i, 1);
    // }
// }
// console.log("updated array of words(words with more than five letters removed:", words);

// Q9:Using the array words =['cat','dog','elephant','giraffe','lion'], use a for loop to create new array called plural/words containing the plural form of each word.?

// var words =['cat','dog','elephant','giraffe','lion'];

// var pluralwords = [];
// for(var i = 0; i < words.length; i++){

    // // var pluralword = words[i] + 'S';

    // pluralwords.push(pluralword);
// }
// console.log(pluralwords);

// Q15:Using the array values =[5,10,15,20,25] ask the user to enter a Number. Usea for loop and the slice method to create a new array containing only the values less than the users input? 

// var values =[5, 10, 15, 20, 25];

// var userinput = (+prompt("Enter a number:"));

// var newArray = [];

// for(var i = 0; i < values.length; i++){

    // if(values[i] < userinput) {

        // newArray.push(values[i]);
    // }

// }
// console.log(newArray);

// Q5: Create an array called grades with five test scores . use a for loop to find and print the lowest grade in the array?

// var grades = [85, 92, 78, 65, 89];

// var lowestgrade = grades[0];

// for(var i = 0; i < grades.length; i++){

    // if(grades[i] < lowestgrade){

        // lowestgrade = grades[i];
    // }
// }
// console.log(lowestgrade);

// var grades = [85, 92, 78, 65, 89];

// var highestgrade = grades[0];

// for(var i = 0; i < grades.length; i++){

    // if(grades[i] > highestgrade){

        // highestgrade = grades[i];
    // }
// }
// console.log(highestgrade);

// Q12: Given the array numbers =[5, 10, 15, 20, 25] use the splice method  to insert the number 12 between 10 and 15?

// var numbers = [5, 10, 15, 20, 25];

// var index = numbers.indexOf(15);

// // numbers.splice(index, 10, 12);

// console.log(numbers);

// Q6:Using the array numbers =[3, 6,9, 12, 15] use a for loop to calculate and print the sum of the  array elements?

// var numbers = [3, 6, 9, 12, 15];

// var sum = 0;

// for (var i = 0; i < numbers.length; i++){

    // sum += numbers[i];
// }

// console.log("The sum of the array element is:", sum);

// Q8:Given the array prices =[25, 30, 15, 10,50] use for  loop to find and print the index of the highest price?

// var prices = [25, 30, 15, 10, 50];

// var highestvalue = prices[0];

// for(var i = 0; i < prices.length; i++){

    // if(prices[i] > highestvalue){

        // highestvalue = prices[i]
    // }


// }
// console.log(highestvalue);

// Q7:Create an array called colors with various color names. use a for loop to print each color on a seperate line?

// var colors = ['yellow', 'red', 'green', 'orange', 'purple']

// for(var i = 0; i < colors.length; i++){
    // console.log(colors[i]);
// }