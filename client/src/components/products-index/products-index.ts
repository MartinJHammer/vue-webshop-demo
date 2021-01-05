import { Component,  Vue } from 'vue-property-decorator';
import { productsService } from '../../main';

@Component<ProductsIndex>({
  subscriptions() {
    return ({
      products$: productsService.get$(),
    });
  },
})
export default class ProductsIndex extends Vue {
}
