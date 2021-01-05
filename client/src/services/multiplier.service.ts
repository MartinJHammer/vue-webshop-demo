export interface IMultiplierService {
  multiply(aNumber: number, multiplier: number): number;
}

export class MultiplierService implements IMultiplierService {
    private static instance: MultiplierService;

    private constructor() { }

    public static getInstance(deps: any): MultiplierService {
      if (!MultiplierService.instance) {
        MultiplierService.instance = new MultiplierService();
      }

      return MultiplierService.instance;
    }

    /**
     * testextra
     */
    public multiply(aNumber: number, multiplier: number): number {
      return aNumber * multiplier;
    }
}
