//object
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//tuple
//must annotate, inference will result in flexible-type array
const drinkTuple: [string, boolean, number] = ['brown', true, 40]

//create a Type if reused
type Drink = [string, boolean, number];
const drinkTuple2: Drink = ['clear', true, 60]

//Why aren't tuples used very often?
//What do these numbers mean? Not much included info
const carSpecs: [number, number] = [400, 3354]
const carSpecs2 = {
    horsepower: 400,
    weight: 3354
}
