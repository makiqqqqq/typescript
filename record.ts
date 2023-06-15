//Record<K,T> == Object

type User <T>= {
    name: string
    age:T
}

const employee: Record<number, User<number>> = {
    0:{
        name: "Lex",
        age: 33
    }
}

//Ex 2

type Fruit = "apple" | "banana" | "orange";
type Price = number;

const fruitPrices:Record<Fruit, Price> = {
    apple: 0,
    banana: 10,
    orange: 1011001
}