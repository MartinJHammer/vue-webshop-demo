import { Component, Prop, Vue } from 'vue-property-decorator';
import { testService } from '../../services/app-services';

@Component<HelloWorld>({
  subscriptions() {
    return ({
      message$: testService.getMessage$(),
    });
  },
})
export default class HelloWorld extends Vue {
  @Prop() public msg!: string;

  public data = {
    message: 'Hello Vue!',
  };
}
