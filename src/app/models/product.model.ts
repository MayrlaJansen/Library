export class Product {
  constructor(
      public id: string,
      public title: string,
      public author: string,
      public description: string,
      public price: number,
      public image: string,
      public rented: boolean,
      public rentedBy: {
        name: string,
        document: string
      } | {}
    ){}
}