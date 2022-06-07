// Problem 1: How many times the word "sumit" belongs to in the sentences variable?
const sentences = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner.\
If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most\
popular technologies to convert you from a no stack to a full stack developer. Learn with Sumit also deep dives into advanced \
topics using the latest best practices for you seasoned web developers.";

const findSumit = sentences.match(/sumit/gi);
const sumitNumber = findSumit ? findSumit.length : 0;
console.log(sumitNumber);
document.getElementById("demo1").innerHTML = `The word "sumit" belongs to in the sentences variable for ${sumitNumber} times`;


// Problem 2: First time "Sumit" index number
let sumitIndex = sentences.search(/sumit/i);
sumitIndex = sumitIndex >= 0 ? sumitIndex : "Not found!"; 
console.log(sumitIndex);




// Problem 3: Linear search function implement
// input: linearSearch(['a', 'b', 'c', 'd', 'c'], 'f')
// output: 2 or 'Not found!'

function linearSearch(arr, val) {
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return "Not found!"
}
console.log(linearSearch(['a', 'b', 'c', 'd', 'f'], 'f'));


// Linear search
// input: arrNum([1, 3, 4, 5, 6, 7], 3)
// output: 1 or not found
function arrNum(arr, val){
    let len = arr.length;
    let i;
    for (i = 0; i < len; i++){
        if (arr[i] === val){
            return i;
        }
    }
    return 'Not found!';
}
let a = arrNum([1, 3, 4, 5, 6, 7], 7);
console.log(a);


// Linear search
const nameArr = ["Michel", "John", "Doe", "Rupak", "Fahad"];
const aName = "Rupak";
function linearSearch(nameArr, aName) {
    let len = nameArr.length;
    let i;
    for (i = 0; i < len; i++){
        if (nameArr[i] === aName) {
            return i;
        }
    }
    return 'Not found!';
}
let searchLi = linearSearch(nameArr, aName);
console.log(searchLi);
// Find valu of array and match of string
// Linear search





// Problem 4: Find longest sring from an array and its index number
const arrString = ["Rana", "Karim", "Jawed karim", "Tonmoy", "John", "Doe"];

function longestString(names) {
    let longestWord = "";
    for (n of names) {
        if (n.length > longestWord.length) {
            longestWord = n;
        }
    }
    return [longestWord, names.indexOf(longestWord)];
}
 
let callFunc = longestString(arrString);
console.log(callFunc);




// Problem 5: Find numbers that is devisible by 3, 5 in 1 to 100
function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0){
            console.log(`${i} is FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} is Buzz`);
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(100);





// Problem 6: Find falsy value from an array
// falsy values: false, null, undefined, NaN, "", 0
const mixedArr = [
    "lws",
    undefined,
    "learn with sumit",
    false,
    "",
    "Apple",
    40,
    "k",
    true,
    "Thanks all",
    NaN
];

// const trueArray = mixedArr.filter(function(el) {
//     if (el) {
//         return true;
//     } else {
//         return false;
//     }
// });
const trueArray = mixedArr.filter(Boolean);

console.log(trueArray);




// Problem 7: Find falsy value from an object
const obj = {
    a: "lws",
    b: undefined,
    c: "learn with sumit",
    d: false,
    e: "",
    f: "Apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN
};

const trueObj = function(obj) {
    for (let i in obj) {
        console.log(i)
        if (!obj[i]) {
            delete obj[i];
        }
    }
    return obj;
}

console.log(trueObj(obj));