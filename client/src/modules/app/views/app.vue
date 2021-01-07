<template>
  <v-app>
    <!-- App bar -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Logo + Name -->
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./../../../assets/sneakers.svg"
          transition="scale-transition"
          width="40"
        />

        <h1>ModernShoes  <span class="text-caption font-italic">We now have {{ productsCount$ }} products waiting for you to explore 👠</span></h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Navigation drawer -->
    <NavigationDrawer :open="drawer" v-on:drawer-toggled="drawer = $event" />

    <!-- Router view -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavigationDrawer from "@/modules/app/components/navigation-drawer/navigation-drawer.vue";
import { productsService } from '../../products/services/products-services';

@Component<App>({
  components: {
    NavigationDrawer,
  },
  subscriptions() {
    return {
      productsCount$: productsService.count$(),
    };
  },
  data() {
    return {
      drawer: false,
    };
  },
})
export default class App extends Vue {}
</script>
