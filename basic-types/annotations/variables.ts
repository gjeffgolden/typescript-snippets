let apples: number = 5
apples = 10

let speed: string = "fast"
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

//built-in objects
let now: Date = new Date()

//array
let colors: string[] = ["Blue", "Red", "Green"]
let myNumbers: number[] = [1, 2, 3]
let myBooleans: boolean[] = [true, false, true]

//classes
class Car {

}

let car: Car = new Car()

//object literal
let point: { x: number, y: number } = {
    x: 10,
    y: 20
}

point = {x: 10, y: 5}

//function
const logNumber: (num: number) => void = (num: number) => {
    console.log(num)
}
//void means function doesn't return anything
//if function returned a value, annotate it

//When to use annotations
//1) Function that returns "any" type
const json = "{'x': 10, 'y':20}"
const coordinates: {x: number, y: number} = JSON.parse(json)
console.log(coordinates); // {x: 10, y: 20}

// coordinates.fkgkgkgfkfkfkfkf
//no error until type annotation added to coordinates variable

//2) When we declare a variable on one line and initialize later
let words = ['red', 'green', 'blue']
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

//3) When type can't be reasonably inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}


