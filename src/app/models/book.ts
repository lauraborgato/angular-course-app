import { Author } from './Author';

export interface Book{
    title:string;
    author: Author;
    publishDate: Date;
    outline:string;
}