<template>
    <div class="content">
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
                                      безопасная сделка
                                    </span>
                                </v-flex>
                                <v-flex>
                                    <p class="body-1">Товары в вашей корзине не зарезервированны и могут продаваться</p>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex>
                            <div class="content__card card">
                                <div class="card__header">
                                    <v-icon>mdi-alert-circle</v-icon>
                                    <p class="body-1">Ваш товар будет отправлен в день заказа</p>
                                </div>
                                <v-layout justify-space-between row>
                                    <v-flex>
                                        <!-- <img :src="`../static/${item.img}`" :alt="`Так выглядят ${item.img}`"> -->
                                    </v-flex>
                                    <v-flex>
                                        <v-layout>
                                            <v-flex>
                                                <p class="text-truncate">
                                                  <!-- {{ item.name }} -->
                                                </p>
                                            </v-flex>
                                            <v-flex>
                                                <v-layout justify-space-between row>
                                                    <v-flex>
                                                        <v-btn outline>Убрать</v-btn>
                                                        <v-btn outline><v-icon>mdi-minus</v-icon></v-btn>
                                                        <span>
                                                          3
                                                          <!-- {{ getLength }} -->
                                                        </span>
                                                        <v-btn outline><v-icon>mdi-plus</v-icon></v-btn>
                                                    </v-flex>
                                                    <v-flex>
                                                        <p>
                                                          $747
                                                          <!-- {{ getTotal }} -->
                                                        </p>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-flex>
                      <v-flex></v-flex>
                      <v-flex></v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs4>
                    <v-layout align-start column>
                        <v-flex>
                            <div class="check-order">
                                <h2 class="font-weight-regular display-1">Всео к оплате</h2>
                                <ul class="check-order__list">
                                  <li>
                                      <span>Цена</span>
                                      <span>
                                        $747
                                        <!-- {{ item.price }} -->
                                      </span>
                                  </li>
                                  <li>
                                      <span>Доставка</span>
                                      <span>Бесплатно</span>
                                  </li>
                                  <li>
                                      <span>Итого</span>
                                      <span>
                                          $1594
                                          <!-- {{ item.total }} -->
                                      </span>
                                  </li>
                                </ul>
                                <v-btn large>Купить</v-btn>
                            </div>
                        </v-flex>
                        <v-flex>
                            <div class="promocode">
                              <v-text-field
                                label="Введите промо-код"
                              ></v-text-field>
                              <v-btn>Применить</v-btn>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
// import Product from '@/components/Product'
// import { mapGetters } from 'vuex'

export default {
}
</script>

<style lang="scss" scoped>
</style>
