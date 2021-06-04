//an interface is a custom data type, like number or string just self-created

interface Vehicle {
    name: string,
    year: number,
    broken: boolean,
    summary(): string
}
//not limited to just primitive values, can include functions and other more complex types as well

interface Reportable {
    summary(): string
}
//oldCivic is ALSO a Reportable data type, only must meet minimum requirements and can have extra data

const oldCivic = {
    name: 'Civic',
    year: 1997,
    broken: false,
    summary(): string {
        return `Name: ${this.name}`
    }
}

//this is ALSO of type Reportable
const soda = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`
    }
}

const printSummary = (item: Reportable ): void => {
    console.log(`Name: ${item.summary()}`)
}

printSummary(oldCivic)
printSummary(soda)

//can use a single Interface to describe the shape of very different objects (REUSABLE)

