console.log("it's working hehe")

//1st exercice
const myArray = [2 ,5 ,8 ,9 ,15 ,31]
const myResult = findLargestNumber(myArray)
console.log("highest number in the array : " + myResult)

function findLargestNumber(tabNumber) {
    return Math.max(...tabNumber)
}

//2nd exercice
const sortedWords = (myArrayOfWords) => myArrayOfWords.sort()
console.log("List of sorted words : " + sortedWords(["Pomme", "Poire", "Abricot", "Zèbre", "Thomas"]))


//3rd exercice
function countOccurences(chaineDeCaractère, caractère) {
    let numberTime = 0;
    for (let words of chaineDeCaractère) {
        if (words.includes(caractère)) {
            numberTime++;
        }
    }
    return numberTime
}

const array = "Paris is not izi";
console.log("Number of same letter in the word : " + countOccurences(array, "i"))

//4th exercice
function flattenArray() {
    let myArray3 = [myArray1, myArray2]

    console.log("New array : " + myArray3.flat())

}

const myArray1 = [1,65]
const myArray2 = [26, 32, 56]
flattenArray()

//5th exercice
function removeDupes(arrayOfNumbers) {
    const mySet = new Set();
    for (let newArray of arrayOfNumbers) {
        if (!mySet.has(newArray)) {
            mySet.add(newArray)
        }
    }
    console.log(mySet)
}

const arrayOfNumbers1 = [1, 2, 3, 5, 6, 8, 1, 5, 7, 9, 16, 51 ,12]
removeDupes(arrayOfNumbers1)

//6th exercice
function swapVariables(x, y) {
    [x , y] = [y , x]
    console.log("Swapped variables")
    console.log([x , y])
}

const swapVariable = 1
const swapVariable1 = 2
swapVariables(swapVariable, swapVariable1)

//7th exercice
function parseObject(object) {

    console.log("Parsed objects")
    console.log(Object.values(object))
}

const myObjectToParse = {a : 3, b : 56 , c : 0}
parseObject(myObjectToParse)

//8th exercice
function mergeObjects(object1, object2) {
    console.log("Merged objects")
    console.log(Object.assign(object1, object2))
}

const myObjectToMerge1 = { a : 2, b : 5}
const myObjectToMerge2 = {c : 6, d : 8}
mergeObjects(myObjectToMerge1, myObjectToMerge2)

//9th exercice
function sumArray(arrayOfNumber) {
    let calculatedNumber = 0
    for (i=0; i<arrayOfNumber.length; i++) {
        calculatedNumber = calculatedNumber + arrayOfNumber[i]
    }
    console.log("Total added number in the array : ")
    console.log(calculatedNumber)
}

const myArrayOfNumber = [1, 5, 6, 2, 8, 4]
sumArray(myArrayOfNumber)

//10th exercice
function sortObject(object) {
    let newObject = Object.keys(object).sort().reduce((x, key) => {
        x[key] = object[key];
    return x}, {});
    let myArray = [newObject]
    console.log("Sorted value in the object : ")
    console.log(myArray)
}

const myObjectToSort = { v : 3, h : 1, p : 9, a : 8}
sortObject(myObjectToSort)