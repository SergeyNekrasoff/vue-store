<template>
    <header class="drawer">
        <v-container pa-2>
            <v-layout align-center justify-space-between row>
                <v-flex xs6>
                    <v-layout align-center justify-start row>
                        <v-flex xs2>
                            <v-btn flat small class="btn-menu">
                                <v-icon>mdi-menu</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs3>
                            <router-link to="/" class="nav-link">
                                <img class="drawer__logo text-left" src="../../static/logo-main.png" alt="">
                            </router-link>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs6>
                    <v-layout align-center justify-end row>
                        <v-flex v-if="getTotalPrice" xs1>
                              <span>
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
      getTotal: 'getTotal',
      getTotalPrice: 'getTotalPrice'
    })
  }
}
</script>

<style lang="scss">
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
}

.navigation {
  background: #fff;
}
</style>
