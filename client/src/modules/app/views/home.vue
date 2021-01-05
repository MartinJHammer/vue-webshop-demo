<template>
    <HelloWorld msg="Welcome to ShoesModen - a demo Web Shop to practice Vue.js!"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/modules/app/components/hello-world/hello-world.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
