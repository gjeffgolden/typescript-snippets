const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

//destructuring return type must include object formatting
const { age }: { age: number } = profile;
const { name, age }: { name: string, age: number } = profile;
const { coords: { lat, lng} }: { coords: { lat: number, lng: number } } = profile;

