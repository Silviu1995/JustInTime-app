export class Product {
    public title: string
    public price: number
    public imgUrl: string
    public description: string
    constructor(
       title: string,
       price: number,
       imgUrl: string,
       description: string,
    ) {
        this.title = title
        this.price = price
        this.imgUrl =imgUrl
        this.description = description
    }
}

