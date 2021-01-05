<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to ShoesModen - a demo Web Shop to practice Vue.js!"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/hello-world/hello-world.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
