<template>
    <div class="product">
      <div class="wrap-img">
        <img :src="`static/${item.img}`" :alt="`Так выглядят ${item.name}`">
      </div>
      <div class="product__details">
          <v-container pa-3>
              <v-layout align-start justify-space-around row>
                  <v-flex xs4 lg3 xl4 pr-4>
                      <v-layout align-end justify-end column>
                          <v-flex mb-5>
                              <p class="font-weight-medium display-2 text text-xs-right text--blue">&mdash; {{ item.discount }}%</p>
                          </v-flex>
                          <v-flex mt-5 mb-5>
                              <p class="font-weight-light body text text-xs-right">description __ description __ description __ description __ description __ description __ description</p>
                          </v-flex>
                      </v-layout>
                  </v-flex>
                  <v-flex xs3 lg5 xl3></v-flex>
                  <v-flex xs4 lg3 xl4 pl-4>
                      <v-layout align-start justify-start column>
                          <v-flex mb-5>
                              <p class="font-weight-bold display-2 text text-xs-left">{{ item.name }}</p>
                              <p class="font-weight-light body text text-xs-left">offer -- offer -- offer -- offer -- offer -- offer -- offer</p>
                          </v-flex>
                          <v-flex mt-5 mb-5>
                              <span class="product__price font-weight-medium display-2 text text-xs-left text--blue">
                                  {{ item.price }}
                                  <v-icon class="text text--rub text--blue">mdi-currency-rub</v-icon>
                              </span>
                          </v-flex>
                          <v-flex mt-5>
                              <v-btn outline large class="btn-add" @click="addItemToCart(item)">
                                  <span class="font-weight-medium title btn-add__text text--blue">CTA</span>
                              </v-btn>
                          </v-flex>
                      </v-layout>
                  </v-flex>
              </v-layout>
          </v-container>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

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
        'addItemToCart'
      ])
    }
}
</script>

<style lang="scss">
@import "../assets/variables.scss";

.product {
    position: relative;

    &__details {
        position: absolute;
        left: 0;
        right: 0;
        top: 45px;
        z-index: 1;
    }

    &__price {
        margin-right: 12px;

        .text--rub {
            margin-bottom: 10px;
        }

        .text--rub:before {
            color: $blue;
        }
    }

    &__price--old {
        margin-right: 6px;

        .text--rub {
            margin-bottom: 6px;
        }

        .text--rub:before {
            color: $dgrey;
        }

        s { margin-right: 6px; }
    }

    .btn-add {
        margin-left: 0;

        &__text {
            padding-right: 12px;
        }

        i:before {
          color: $blue;
        }
    }
}
.wrap-img {
    position: relative;
    margin-top: 150px;

    &:before {
        content: '';
        position: absolute;
        // border: 1px solid $grey;
        box-shadow: inset 0px 15px 12px -13px rgba(3, 3, 3, 0.5);
        top: 50%;
        left: 50%;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        width: 750px;
        height: 750px;
        background: $checkout;
        margin-left: -375px;
        margin-top: -375px;
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
