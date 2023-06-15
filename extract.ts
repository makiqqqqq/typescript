// Extract<T, U>

type Animal = "cat" | 'dog' | "snake";
type Pet = "cat" | "dog";

type OnlyPets = Extract<Animal, Pet>

const myPet: OnlyPets = "cat" //OK!!
const wildAnimal: OnlyPets = "snake" //ERROR!!

type Different = "react" | "name" | "dog";
type Skills = "react" | "html";

type OnlySkills = Extract<Different,  Skills>;

const mySkills: OnlySkills = "react" // because "react" are in theSkills

//ex 2
type FirstType =  {  id: number,  firstName: string , lastName: string }
interface SecondType {  id: number,  address: string,  city: string }

type OnlyId = Extract<keyof FirstType,keyof SecondType> // Initial type: "id"

const id:OnlyId = "id"
