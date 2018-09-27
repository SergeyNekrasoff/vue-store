<template>
    <div class="cart">
        <v-container pa-2>
            <v-layout align-start justify-space-between row wrap>
                <v-flex xs8>
                    <v-layout column>
                        <v-flex>
                            <v-layout column>
                                <v-flex>
                                    <h1 class="font-weight-medium display-3">Моя корзина</h1>
                                    <span class="caption">
                                      <v-icon>mdi-lock</v-icon>
                                      безопасная оплата
                                    </span>
                                </v-flex>
                                <v-flex>
                                    <p class="body-1">Товары в вашей корзине не зарезервированны и могут продаваться</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex v-if="getTotal">
                            <div class="cart__control">
                                <div class="header">
                                    <v-icon>mdi-alert-circle</v-icon>
                                    <p class="body-1">Ваш товар будет отправлен в день заказа</p>
                                </div>
                                <div
                                  v-for="(item, index) in items"
                                  :key="index"
                                  class="items"
                                >
                                    <v-layout justify-space-between row>
                                        <v-flex>
                                          <!-- <img :src="`../static/${item.img}`" :alt="`Так выглядят ${item.img}`"> -->
                                        </v-flex>
                                        <v-flex>
                                          <v-layout>
                                            <v-flex>
                                              <p class="text-truncate">
                                                {{ item.name }}
                                              </p>
                                            </v-flex>
                                            <v-flex>
                                              <v-layout justify-space-between row>
                                                <v-flex>
                                                  <v-btn outline @click="clearCart()">Убрать</v-btn>
                                                  <v-btn outline @click="removeItem(item)"><v-icon>mdi-minus</v-icon></v-btn>
                                                  <span>{{ item.qty }}</span>
                                                  <v-btn outline @click="addItem(item)"><v-icon>mdi-plus</v-icon></v-btn>
                                                </v-flex>
                                                <v-flex>
                                                  <p>{{ item.price }}</p>
                                                </v-flex>
                                              </v-layout>
                                            </v-flex>
                                          </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </div>
                            </div>
                        </v-flex>
                        <v-flex v-else>
                            У вас пока нет товаров
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex v-if="getTotal" xs4>
                    <!-- <v-layout align-start column> -->
                        <!-- <v-flex> -->
                            <div class="cart__order">
                                <h2 class="font-weight-regular display-1">Сумма заказа</h2>
                                <ul class="cart__order-list">
                                    <li>
                                        <span>Цена</span>
                                        <span>{{ getTotalPrice }} <v-icon>mdi-currency-rub</v-icon></span>
                                    </li>
                                    <li>
                                        <span>Доставка</span>
                                        <span>Бесплатно</span>
                                    </li>
                                    <li>
                                        <b>К оплате</b>
                                        <b>
                                          {{ getTotalPrice }}
                                          <v-icon>mdi-currency-rub</v-icon>
                                        </b>
                                    </li>
                                </ul>
                                <v-btn large>К оплате</v-btn>
                            </div>
                        <!-- </v-flex> -->
                      <!-- <v-flex>
                        <div class="cart__promo">
                          <v-text-field
                          label="Введите промо-код"
                          ></v-text-field>
                          <v-btn>Применить</v-btn>
                        </div>
                      </v-flex> -->
                    <!-- </v-layout> -->
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
// import Product from '@/components/Product'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      items: 'getStock',
      getTotal: 'getTotal',
      getTotalPrice: 'getTotalPrice'
    })
  },
  methods: {
    ...mapActions([
      'addItem',
      'removeItem',
      'clearCart'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
