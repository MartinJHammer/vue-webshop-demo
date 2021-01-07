import { interval, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { INumberService } from '../../app/services/number.service';
import { Product } from '../models/product';

export interface ProductsServiceDependencies {
  numberService: INumberService;
}

export class ProductsService {
  private static instance: ProductsService;
  private numberService: INumberService;

  private constructor(deps: ProductsServiceDependencies) {
    this.numberService = deps.numberService;
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

  public count$(): Observable<number> {
    return interval(3000).pipe(
      map((count) => this.numberService.addition([count, 1536])),
      startWith(1536)
    );
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
