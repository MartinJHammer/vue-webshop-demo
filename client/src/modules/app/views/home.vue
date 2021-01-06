<template>
    <Welcome/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/modules/app/components/welcome/welcome.vue';

@Component({
  components: {
    Welcome,
  },
})
export default class Home extends Vue {}
</script>
