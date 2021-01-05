import { Component,  Vue } from 'vue-property-decorator';
import { productsService } from '../../services/products-services';

@Component<ProductsIndex>({
  subscriptions() {
    return ({
      products$: productsService.get$(),
    });
  },
})
export default class ProductsIndex extends Vue {
}
