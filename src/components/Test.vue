<template>
    <div class="product">
      <div class="wrap-img">
        <img :src="`../static/${item.img}`" :alt="`Так выглядят ${item.img}`">
      </div>
      <div class="product__details">
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <v-btn outline large class="btn-add" @click="addToCart(item)">
            <span>В корзину</span>
            <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
// import { mapMutations } from 'vuex'

export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    methods: {
      ...mapActions([
        'addToCart'
      ])
      // ...mapMutations([
      //   'addItem'
      // ])
      // addItem (item) {
      //   this.$store.commit('addItem', { item })
      // }
    }
}
</script>

<style lang="scss">
.product {
    position: relative;

    &__details {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
    }
}
.wrap-img {
    position: relative;
    margin-top: 148px;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        width: 80vh;
        height: 80vh;
        background: #fff;
        margin-left: -40vh;
        margin-top: -40vh;
    }

    img {
        width: 250px;
        margin: 150px auto 0;
        position: relative;
        left: 10px;
        top: -86px;
    }
}
</style>
