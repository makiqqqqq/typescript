// Exclude<T, U>
//Unlike Extract , the Exclude utility will create a type by excluding properties that are already present in two different types.
// It is excluded from T of all fields to which U can be assigned .

type Animal = "cat" | "dog" | "bird" | "snake";

type WildAnimal = "bird" | "snake";

type DomesticAnimal = Exclude<Animal, WildAnimal>;

const myPet: DomesticAnimal = "cat"; // Ок
const myPet2: DomesticAnimal = "dog"; // Ок

const wildAnimal: DomesticAnimal = "bird"; //ype '"bird"' is not assignable to type 'DomesticAnimal'.