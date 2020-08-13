export class User {
  id: number;
  nick: string;
  pass: string;
  name?: string;
  email?: string;
  folders?: string;

  constructor(id: number, nick: string, pass: string, name?: string, email?: string, folders?: string) {
    this.id = id;
    this.nick = nick;
    this.pass = pass;
    this.name = name;
    this.email = email;
    this.folders = folders;
  }
}
