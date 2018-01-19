
export class Book {
    constructor(
        public id: number,
        public title: string,
        public description: string
    ) {

    }
}

export interface Movie {
    id: number;
    title: string;
}
