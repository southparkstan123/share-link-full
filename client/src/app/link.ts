export class Link {
    constructor(
        public id: number,
        public url: string,
        public title: string,
        public isShared: boolean,
        public tags: object
    ) { }
}
