// GENERAL TYPES

// T   ----- any type
const showType = <T>(id: number, arg: T) => console.log(arg)
showType(0, 's')
showType(0, false)
showType(0, {name: "Max"})

const generalTypes  =<T,U> (arg1: T, atg2?: U) => null
generalTypes(0)
generalTypes(0,0)
generalTypes(false,[false, {name: 'M'}])

type GenericType<T, U> = {
    arg1:T,
    arg2:U,
}
const generalTypes2 = <T,U>(args : GenericType<string, Array<string>>) => null

generalTypes2({arg1: 'adsa', arg2: ['dsadas']})