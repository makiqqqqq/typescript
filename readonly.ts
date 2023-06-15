//utility type converts all properties of type T to make them not reassignable with a new value.
type ReadonlyIdType  = {
    readonly id: number, // You can also use this case
}
type Person <T,U>  = {
    id: T,
    name?: U
}

const person: Readonly<Person<string, string>> = {
    id: '1',
    name: 'Vaaya'
}
person.name = 'Makiqq' // Err because person object Readonly

// ReadonlyArray
const numbers: ReadonlyArray<number> = [1,2,3];
numbers.push() // ERROR Property 'push' does not exist on type 'readonly number[]'.

const tuple: Readonly<[string, boolean]> = ['1', false];
tuple[0] = '2' //Cannot assign to '0' because it is a read-only property.
