<template>
  <div class="products">
    <ProductsIndex />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductsIndex from '@/modules/products/components/products-index/products-index.vue';

@Component({
  components: {
    ProductsIndex,
  },
})
export default class Products extends Vue {}
</script>
