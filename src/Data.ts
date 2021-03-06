export interface Point {
    x: number,
    y: number,
}

export interface Single {
    type: 'single',
    value: Point,
}

export interface Vector {
    type: 'vector',
    value: Point,
}

export interface Multiple {
    type: 'multiple',
    value: Array<Point>
}

export type Value = Single | Vector | Multiple;
