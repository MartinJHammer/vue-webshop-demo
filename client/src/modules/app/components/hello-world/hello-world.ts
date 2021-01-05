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

  public internalLinks = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Products',
      href: 'products',
    },
  ];

  public whatsNext = [
    {
      text: 'Explore components',
      href: 'https://vuetifyjs.com/components/api-explorer',
    },
    {
      text: 'Select a layout',
      href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
    },
    {
      text: 'Frequently Asked Questions',
      href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
    },
  ];

  public ecosystem = [
    {
      text: 'vuetify-loader',
      href: 'https://github.com/vuetifyjs/vuetify-loader',
    },
    {
      text: 'github',
      href: 'https://github.com/vuetifyjs/vuetify',
    },
    {
      text: 'awesome-vuetify',
      href: 'https://github.com/vuetifyjs/awesome-vuetify',
    },
  ];
  
  public importantLinks = [
    {
      text: 'Documentation',
      href: 'https://vuetifyjs.com',
    },
    {
      text: 'Chat',
      href: 'https://community.vuetifyjs.com',
    },
    {
      text: 'Made with Vuetify',
      href: 'https://madewithvuejs.com/vuetify',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/vuetifyjs',
    },
    {
      text: 'Articles',
      href: 'https://medium.com/vuetify',
    },
  ];
}


