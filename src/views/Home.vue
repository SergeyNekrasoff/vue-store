<template>
  <div>
    <!-- <Product /> -->
    <div class="products-list">
      <div is="TestItem"
        v-for="(item, index) in products"
        :key="index"
        :item="item"
        :index="index"
      ></div>
    </div>
  </div>
</template>

<script>
// import Product from '@/components/Product'
import TestItem from '@/components/Test'
import { mapGetters } from 'vuex'

export default {
  components: {
    // Product,
    TestItem
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
