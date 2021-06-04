const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number) => {
    a - b
}
//TS infers this return type as 'void'
//Fix? Always annotate return types for functions!

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void  => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message)
}

//annotating with destructuring
//destructure first, then add type annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}