//Unlike the Partial , the Required utility makes all properties of T of the desired type required.
type RequiredType  = {
    id: number,
    name: string,
    russianDog: boolean
}

const getRequired = (args: Required<RequiredType>) => null

//Err because fc want all args
getRequired({name: 'Makiqq'})

//Good practice
getRequired({name: 'Makiqq',id: 1,russianDog: false})