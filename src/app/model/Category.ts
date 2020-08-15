export class Category {
  id: number;
  title: string;
  child?: string[];

  constructor(id: number, title: string, child?: string[]) {
    this.id = id;
    this.title = title;
    this.child = child;
  }
}
