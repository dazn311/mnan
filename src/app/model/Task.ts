
export class Task {
  id: number;
  task: string;
  text: string;
  date: number;
  folder?: string;
  userID?: number;

  constructor(id: number, task: string, text: string, date: number, folder?: string, userID?: number) {
    this.id = id;
    this.task = task;
    this.text = text;
    this.date = date;
    this.folder = folder;
    this.userID = userID;
  }
}
