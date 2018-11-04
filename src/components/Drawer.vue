<template>
    <header class="drawer">
        <v-container pa-2>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-layout align-center justify-start row>
                        <v-flex xs2 lg2>
                            <v-btn flat small class="btn-menu" @click.native="show">
                                <v-icon>mdi-menu</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs3 lg2>
                            <router-link to="/" class="nav-link">
                                <img class="drawer__logo text-left" src="static/logo-main.png" alt="Bozlun логотип">
                            </router-link>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs6>
                    <v-layout align-center justify-end row>
                        <v-flex class="drawer__total-price" v-if="getTotalPrice" xs2 pr-1>
                              <span class="font-weight-bold body-2">
                                  {{ getTotalPrice }}
                                  <v-icon class="text text--rub">mdi-currency-rub</v-icon>
                              </span>
                        </v-flex>
                        <v-flex xs1>
                          <div v-if="getTotal">
                            <router-link to="/cart" class="nav-link drawer__counter">
                              {{ getTotal }}
                            </router-link>
                          </div>
                          <div v-else class="drawer__counter">0</div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '@/main'

export default {
  data: () => {
      return ({
          links: [
              {
                  id: 0,
                  label: 'Главная',
                  path: '/'
              },
              {
                  id: 1,
                  label: 'О нас',
                  path: '/about'
              },
              {
                  id: 2,
                  label: 'Доставка',
                  path: '/shipping'
              },
              {
                  id: 3,
                  label: 'Контакты',
                  path: '/contacts'
              }
          ]
      })
  },
  computed: {
      ...mapGetters({
          getTotal: 'getTotal',
          getTotalPrice: 'getTotalPrice'
      })
  },
  methods: {
      show: function () {
          eventBus.$emit('open', true)
      }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
    &__logo {
        width: 120px;
        margin-top: 6px;
    }

    &__counter {
        font-size: 12px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #2c17fa;
        line-height: 28px;
        margin-left: 8px;
        display: block;
        color: #fff;
    }

    &__total-price {
        text-align: right;

        .text--rub {
            margin: 0;

            &:before {
                font-size: 12px;
                margin-left: -4px;
            }
        }
    }
}

.navigation {
    background: #fff;
}
</style>
