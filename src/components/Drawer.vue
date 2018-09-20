<template>
    <header class="drawer">
        <v-container pa-2>
            <v-layout align-center justify-space-between row>
                <v-flex xs2>
                    <v-layout align-center justify-start row>
                        <v-flex>
                            <v-btn flat small @click.stop="menu = !menu">
                                <v-icon>mdi-menu</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex>
                            <img class="drawer__logo" src="../../static/logo-main.png" alt="">
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex>
                  <!-- Cart vidget -->
                    <v-layout align-center justify-end row>
                        <v-flex text-xs-right>
                          <v-btn flat small>
                              <router-link to="/cart" class="nav-link">
                                  <span v-if="getLength" class="product-counter">
                                      {{ getLength }}
                                  </span>
                                  <v-icon>mdi-cart-outline</v-icon>
                              </router-link>
                          </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout>
                <!-- Navigation -->
                <v-navigation-drawer v-model="menu" absolute temporary class="navigation" width="400">
                    <nav class="navigation-bar">
                        <ul class="navigation-bar__list">
                            <li v-for="link in links" :key="link.id">
                                <router-link v-bind:key="link.id" :to="`${link.path}`">
                                  {{ link.label }}
                                </router-link>
                            </li>
                            <li>
                                <a @click="policyModal = true">Политика конфиденциальности</a>
                            </li>
                        </ul>
                    </nav>
                </v-navigation-drawer>

                <!-- Modals -->
                <v-dialog v-model="policyModal" fullscreen lazy hide-overlay transition="slide-x-transition">
                    Test
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="policyModal = false">I accept</v-btn>
                </v-dialog>
            </v-layout>
        </v-container>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
      return ({
          policyModal: false,
          menu: false,
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
      getLength: 'getProductsLength'
    })
  }
}
</script>

<style lang="scss">
@import '../assets/theme.scss';

.drawer {
  &__logo {
    width: 120px;
  }
}

.promo-spot {
  background: #2c17fa;
  color: #fff;
}

.navigation {
  background: #fff;
}

.product-counter {
  border: 1px solid #fff;
  font-size: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #2c17fa;
  line-height: 16px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: -6px;
}
</style>
