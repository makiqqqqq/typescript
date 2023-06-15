// Omit<T, K>
// Omit Utility is the opposite of Pick  type. And instead of selecting elements, it will remove K properties from type T .

type PersonT = {
    name: string;
    age: number;
    address: string;
}

type PersonWithoutAddress = Omit<PersonT, "address">;

const omitUser: PersonWithoutAddress = {
    age: 22, name: 'Nick' // object hasn't field address, because  Omit delete it
}

