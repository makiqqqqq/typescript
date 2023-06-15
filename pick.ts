// Pick<T, K>
// This allows you to create a new type from an existing model T by selecting some properties K of that type.

type User<T> = {
    id: number,
    name:string,
    age: T,
    skills: Array<string>
}

type PickUser = Pick<User<unknown>, "name" | "skills"  | "age"> // u get  "name" | "skills"  | "age" from  User type

const user:PickUser = {
    age: 22,
    name: 'Makiqqqqq',
    skills: ['']
}