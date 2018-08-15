export class Keg {
  public pints: number = 124;


   constructor( public beerName: string, public brand: string, public price: number, public alcoholContent: number, public registered: boolean = true) {}
}
