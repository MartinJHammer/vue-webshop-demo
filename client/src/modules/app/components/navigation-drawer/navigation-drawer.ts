import { Component, Prop, Vue } from 'vue-property-decorator';

@Component<NavigationDrawer>({
  computed: {
    drawerOpen: {
      get() {
        return this.open;
      },
      set(toggled: boolean) {
        this.$emit('drawer-toggled', toggled);
      }
    }
  }
})
export default class NavigationDrawer extends Vue {
  @Prop() public open!: boolean;

  public navigation = [
    {
      text: 'Home',
      href: '/',
      icon: 'mdi-home',
    },
    {
      text: 'About',
      href: '/about',
      icon: 'mdi-information',
    },
    {
      text: 'Products',
      href: 'products',
      icon: 'mdi-file-image',
    },
  ];
}


