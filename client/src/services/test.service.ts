import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class TestService {
    private static instance: TestService;

    private constructor() { }

    public static getInstance(): TestService {
      if (!TestService.instance) {
        TestService.instance = new TestService();
      }

      return TestService.instance;
    }

    /**
     * test
     */
    public getMessage$(): Observable<string> {
      return interval(1000).pipe(
        map((count) => `We are now at: ${count}`),
      );
    }
}
