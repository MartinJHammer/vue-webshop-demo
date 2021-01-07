export interface INumberService {
  multiply(aNumber: number, multiplier: number): number;
  addition(numbers: number[]): number;
}

export class NumberService implements INumberService {
  private static instance: NumberService;

  private constructor() { }

  public static getInstance(deps: any): NumberService {
    if (!NumberService.instance) {
      NumberService.instance = new NumberService();
    }

    return NumberService.instance;
  }

  public addition(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  }

  public multiply(aNumber: number, multiplier: number): number {
    return aNumber * multiplier;
  }
}
