import { MultiplierService } from './multiplier.service';
import { TestService } from './test.service';

export const multiplierService = MultiplierService.getInstance({});
export const testService = TestService.getInstance({ multiplierService });
