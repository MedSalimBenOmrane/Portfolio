export interface PublicationLink {
  label: string;
  url: string;
  icon: string;
}

export class Publication {
  title: string;
  authors: string[];
  myName: string;
  venue: string;
  year: string;
  status: string;
  abstract: string;
  links: PublicationLink[];
  expanded: boolean;

  constructor(
    title = '',
    authors: string[] = [],
    myName = '',
    venue = '',
    year = '',
    status = '',
    abstract = '',
    links: PublicationLink[] = []
  ) {
    this.title = title;
    this.authors = authors;
    this.myName = myName;
    this.venue = venue;
    this.year = year;
    this.status = status;
    this.abstract = abstract;
    this.links = links;
    this.expanded = false;
  }
}
