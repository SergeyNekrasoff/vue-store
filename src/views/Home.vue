<template>
  <div>
    <div class="products-list">
      <Product
        v-for="(item, index) in products"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'
import { mapGetters } from 'vuex'

export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters({
      products: 'getProducts'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
