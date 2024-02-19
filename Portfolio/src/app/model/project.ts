export class project {
    title:string;
    category:string;
    stack:string;
    period:string;
    links:string;
    description:string;
    pathImage:string[];
    pathVid:string[];

    constructor(title="",
        category="",
        stack="",
        period="",
        links="",
        description="",
        pathImage:[],
        pathVid:[]) 
        
        {
      this.title=title;
      this.category=category;
      this.stack=stack;
      this.period=period;
      this.links=links;
      this.description=description;
      this.pathImage=pathImage;
      this.pathVid=pathVid
    }
  
  }