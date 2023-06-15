// Partial<T>
// Partial allows you to make all properties of type T optional. Will he add ? checkbox next to each field.

type PartialType  = {
    id: number,
    name: string,
    russianDog: boolean
}

const showPartial = (args: Partial<PartialType>) => null

showPartial({id: 0})
showPartial({name: 'Vova', russianDog: true})
