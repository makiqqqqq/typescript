type Person = {
    name: string;
    age: number;
    address: string;
};

type PersonKey = keyof Person;

const person:PersonKey = "address";

//ex 2
const personObj: Person = {
    name: "John",
    age: 30,
    address: "123 Main St",
};

const getProperty = (obj: Person, key: PersonKey) => obj[key];
 getProperty(personObj, "name") //"John"