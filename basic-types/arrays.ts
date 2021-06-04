//type inference assigns this as string[] automatically
const carMakers = ['ford', 'toyota', 'chevrolet']
const carMakers2: string[] = []

const dates = [new Date(), new Date()]

const carsByMake = [
    ['f-150'],
    ['corolla'],
    ['camaro']
]
const carsByMake2: string[][] = [];

//Help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

//Prevent incompatible values
carMakers.push(8);

//Help with iterators
carMakers.map((car: string): string => {
    return car;
})

//Flexible types
const importantDates = [new Date(), '2030-10-10']
const importantDates2: (string | Date)[] = []