// Intersection types ====>>>
type LeftType = {
    id: number,
    left: string
}

type RightType = {
    id: number,
    right: boolean
}

type IntersectionType = LeftType & RightType;//  LeftType + RightType

const obj: IntersectionType = {left: 'string', id: 0, right: false} //