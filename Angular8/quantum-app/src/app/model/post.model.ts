// export interface Post {
//     id: number;
//     userId: string;
//     body: string;
//     title: string;
// }

export class Post {
    constructor(
        public id: number,
        public userId: string,
        public body: string,
        public title: string
    )
    {};
}