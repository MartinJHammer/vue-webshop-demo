import { Component, Prop, Vue } from 'vue-property-decorator';
import { TestService } from '../../services/test.service';


@Component<HelloWorld>({
  subscriptions() {
    return ({
      message$: TestService.getInstance().getMessage$(),
    });
  },
})
export default class HelloWorld extends Vue {
  @Prop() public msg!: string;

  public data = {
    message: 'Hello Vue!',
  };
}
