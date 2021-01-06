import { interval, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IMultiplierService } from './multiplier.service';

export interface TestServiceDependencies {
  multiplierService: IMultiplierService;
}

export class TestService {
  private static instance: TestService;
  private multiplierService: IMultiplierService;

  private constructor(deps: TestServiceDependencies) {
    this.multiplierService = deps.multiplierService;
  }

  public static getInstance(deps: TestServiceDependencies): TestService {
    if (!TestService.instance) {
      TestService.instance = new TestService(deps);
    }

    return TestService.instance;
  }

  public getMessage$(): Observable<string> {
    return interval(1000).pipe(
      map((count) => `${this.multiplierService.multiply(count, 1)}`),
      startWith(`0`)
    );
  }
}
