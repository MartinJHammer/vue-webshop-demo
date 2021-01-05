export class Product {
    public name!: string;
    public description!: string;

    constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }
}