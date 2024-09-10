export class Expinfo {
  title: string;
  date: string;
  desc: string[];

  constructor(title = "", date = "", desc: string[] = []) {
    this.title = title;
    this.date = date;
    this.desc = desc;
  }
}
