<template>
    <div class="cart">
        <v-container pa-2>
            <v-layout v-if="getTotal" align-start justify-space-between row wrap>
                <v-flex xs8 text-xs-left pr-4>
                    <v-layout column>
                        <v-flex class="cart__header">
                            <v-layout column>
                                <v-flex>
                                    <h1 class="font-weight-medium display-2 d-inline-block cart__title">Моя корзина</h1>
                                    <span class="caption d-inline-block font-weight-regular cart__subtitle">
                                      <v-icon small>mdi-lock</v-icon>
                                      Безопасная оплата
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex class="cart__stock">
                            <div class="cart__control">
                                <div class="header">
                                    <v-layout justify-start align-center row pa-3>
                                        <v-flex class="icon">
                                            <v-icon>mdi-alert-circle</v-icon>
                                        </v-flex>
                                        <v-flex>
                                            <span class="body-1">
                                                Ваш товар будет отправлен в день заказа
                                            </span>
                                        </v-flex>
                                    </v-layout>

                                </div>
                                <div
                                    v-for="(item, index) in items"
                                    :key="index"
                                    class="items"
                                >
                                    <v-layout justify-space-between row class="items__inner" pa-3>
                                        <v-flex class="items__img" lg4>
                                          <img :src="`static/${item.img}`" :alt="`Так выглядят ${item.img}`">
                                        </v-flex>
                                        <v-flex class="items__content" lg8>
                                            <v-layout justify-space-between fill-height column>
                                                <v-flex class="items__label" xs10>
                                                    <p class="font-weight-bold text-truncate subheading">
                                                        {{ item.name }}
                                                    </p>
                                                    <div class="items__details"></div>
                                                </v-flex>
                                                <v-flex xs2>
                                                    <v-layout align-center justify-space-between row>
                                                        <v-flex>
                                                            <v-btn flat ripple @click="clearCart()" class="btn-clear">Очистить</v-btn>
                                                            <v-btn flat ripple @click="removeItem(item)" class="btn-reduce"><v-icon small>mdi-minus</v-icon></v-btn>
                                                            <span>{{ item.qty }}</span>
                                                            <v-btn flat ripple @click="addItem(item)" class="btn-add"><v-icon small>mdi-plus</v-icon></v-btn>
                                                        </v-flex>
                                                        <v-flex text-xs-right>
                                                            <p class="font-weight-bold subheading">{{ item.price }}</p>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </div>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs4 text-xs-left>
                    <v-layout column>
                        <v-flex class="order" pa-4 text-xs-left>
                            <h2 class="font-weight-medium title">Сумма заказа</h2>
                            <div class="pt-4 pb-3">
                                <ul class="order__list">
                                    <li>
                                        <span class="font-weight-regular body-2">Цена</span>
                                        <span class="font-weight-regular body-2">{{ getTotalPrice }}</span>
                                    </li>
                                    <v-divider></v-divider>
                                    <li>
                                        <span class="font-weight-regular body-2">Доставка</span>
                                        <span class="font-weight-regular body-2">Бесплатно</span>
                                    </li>
                                    <v-divider></v-divider>
                                    <li>
                                        <span class="font-weight-regular body-2">НДС</span>
                                        <span class="font-weight-regular body-2">0</span>
                                    </li>
                                    <v-divider></v-divider>
                                    <li class="summary">
                                        <span class="font-weight-medium subheading text-xs-center">Итого</span>
                                        <span class="font-weight-medium subheading text-xs-center">{{ getTotalPrice }}</span>
                                    </li>
                                </ul>
                            </div>
                            <v-btn block flat large class="btn-order" to="/payment">Оформить заказ</v-btn>
                            <div class="payment-banks">
                                <ul class="payment-banks__list">
                                    <li class="payment-banks__li visa"></li>
                                    <li class="payment-banks__li mastercard"></li>
                                    <li class="payment-banks__li maestro"></li>
                                    <li class="payment-banks__li alfa"></li>
                                    <li class="payment-banks__li sber"></li>
                                </ul>
                            </div>
                        </v-flex>
                        <v-flex class="cart__promo" pa-4 text-xs-left>
                            <h3 class="font-weight-medium title">Зимние промо-акции</h3>
                            <div class="cart__promo-field">
                                <v-text-field
                                    label="Введите промо-код"
                                    class="input-field"
                                    v-model="promo"
                                    id="promo">
                                </v-text-field>
                                <v-icon v-if="isDiscounted" class="icon-ok">mdi-check-circle</v-icon>
                                <v-btn
                                    flat
                                    class="btn-apply-code"
                                    @click="checkPromo(promo)"
                                    v-else
                                >
                                    <v-icon>mdi-arrow-right-bold</v-icon>
                                </v-btn>
                            </div>
                            <p class="font-weight-regular caption"><b>Гарантия безопасной сделки:</b> только одна рекламная акция разрешена на покупку, но Bozlun будет применять всегда, чтобы Вы получили больше экономии!</p>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout v-else align-center justify-space-between column wrap>
                <v-flex text-xs-center pa-5>
                    <p class="font-weight-regular display-1">Ваша корзина пуста</p>
                </v-flex>
                <v-flex text-xs-center>
                    <router-link to="/" class="subheading nav-link nav-link--decor font-weight-light">
                        Перейти на главную</router-link>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data () {
        return {
            promo: '',
            test: ''
        }
    },
    computed: {
        ...mapGetters({
            items: 'getStock',
            getTotal: 'getTotal',
            getTotalPrice: 'getTotalPrice',
            isDiscounted: 'getCheckDiscounted'
        })
    },
    methods: {
        ...mapActions([
            'addItem',
            'removeItem',
            'clearCart',
            'checkPromo'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.cart {
    padding-top: 50px;

    &__header {
        margin-bottom: 30px;
    }

    &__title {
        margin-right: 24px;
    }

    &__subtitle {
        color: $smooth;
    }

    &__description {
        margin-top: 20px;
    }

    &__stock {
        border: 1px solid $light;
    }

    &__control {
        background: $white;

        .header {
            background: $white;

            i:before { color: $dgreen; }

            .icon {
                max-width: 30px;
            }
        }

        .items {
            background: #fff;
            padding: 20px;

            &__inner {
                border: 1px solid $light;
            }

            &__img {
                background: $white;
                height: 186px;
                position: relative;
                margin-right: 20px;
                text-align: center;
                padding: 16px;
                overflow: hidden;
            }

            &__content {
                height: 186px;
            }

            img {
                height: 100%;
                max-width: 100%;
            }

            &__label {
                /*margin-bottom: 75px;*/
            }

            &__details {
                margin-top: 8px;

                p {
                    color: $dgrey;
                }

                span {
                    color: $black;
                }
            }
        }
    }

    &__promo {
        border: 1px solid $light;
        background: $checkout;
        margin-bottom: 24px;
    }

    &__promo-field {
        position: relative;
        margin-top: 24px;

        .icon-ok {
            position: absolute;
            top: 0;
            right: 0;
            top: 5px;
            top: 5px;
            color: $dyellow;
        }
    }
}
</style>
