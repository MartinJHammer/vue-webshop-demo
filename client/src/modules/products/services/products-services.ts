import { ProductsService } from './products.service';
import { numberService } from './../../app/services/app-services';


export const productsService = ProductsService.getInstance({
    numberService
});
