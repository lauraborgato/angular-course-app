import { Author } from './Author';

export class Book {

    constructor(public title: string,
        public author: Author,
        public publishDate: Date,
        public outline: string,
        public imageUrl:string,
        public price: number,
        public amount?: number) { }
}