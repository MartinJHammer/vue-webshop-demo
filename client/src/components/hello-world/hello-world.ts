import { BehaviorSubject } from 'rxjs';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component<HelloWorld>({
  subscriptions() {
    return ({
      message$: new BehaviorSubject<string>('Hello from observable!'),
    });
  },
})
export default class HelloWorld extends Vue {
  @Prop() public msg!: string;

  public data = {
    message: 'Hello Vue!',
  };
}
