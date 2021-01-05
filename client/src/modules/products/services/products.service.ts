import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

export interface ProductsServiceDependencies {
}

export class ProductsService {
  private static instance: ProductsService;

  private constructor(deps: ProductsServiceDependencies) {
  }

  public static getInstance(deps: ProductsServiceDependencies): ProductsService {
    if (!ProductsService.instance) {
      ProductsService.instance = new ProductsService(deps);
    }

    return ProductsService.instance;
  }

  public get$(): Observable<Product[]> {
    return of(this.mockData());
  }

  private mockData(): Product[] {
    return [
      new Product({
        name: 'Suuzie Sandals',
        description: 'A slick sandal for the fashion-aware modern woman.'
      }),
      new Product({
        name: 'Rookie Sneakers',
        description: `We're all rookies sometimes. Rookie Snearkers signals a humble and "learn-by-doing" attitude.`
      }),
      new Product({
        name: 'Bander shoes v3',
        description: 'This shoe has been made with the modern pro-trickster in mind.'
      })
    ];
  }
}
