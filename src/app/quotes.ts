export class Quotes {
  
  showDescription: boolean;
  votes: any;
  constructor(public id: number,public actualQuote: string,public quoteAuthor: string, public quoteSubmitter: string, public createTime: Date){
    this.showDescription=true;
  }
  // id: number;
  // actualQuote: string;
  // description: string;
}



// export class Quotes {

//   showDescription: boolean;
//   constructor(public id: number,public actualQuote: string,public description: string){
//     this.showDescription=true;
//   }