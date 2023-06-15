//NonNullable<T>
// It allows you to remove null and undefined from type T .

type Value = string | null | undefined;

const nonNullableValue: NonNullable<Value> = "Hello";