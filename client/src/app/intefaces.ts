export interface ILink {
    id: number;
    url: string;
    title: string;
    isShared: boolean;
    tags: ITag[];
}

export interface ITag {
    name: string;
  }
