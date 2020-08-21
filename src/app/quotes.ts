export class Quotes {

  showDescription: boolean;
  constructor(public id: number,public actualQuote: string,public description: string){
    this.showDescription=true;
  }
  // id: number;
  // actualQuote: string;
  // description: string;
}
