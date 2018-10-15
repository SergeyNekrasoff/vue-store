<template>
    <v-dialog
        v-model="close"
        full-width
        transition="slide-y-transition"
        class="navigation"
    >
        <v-container class="navigation__inner skin" pa-2>
            <v-layout align-start justify-space-between row column-xs class="navigation__header">
                <v-flex xs6 class="text-xs-left">
                    <div>
                        <img class="navigation__logo text-left" src="../../static/logo-main.png" alt="Bozlun логотип">
                    </div>
                </v-flex>
                <v-flex xs1 class="text-xs-right">
                    <button class="btn-close" @click.stop="close = false">
                      <v-icon small>mdi-close</v-icon>
                    </button>
                </v-flex>
            </v-layout>
            <v-layout align-start justify-space-between row wrap class="navigation__content">
                <v-flex md6 xs12 class="text-xs-left" order-xs3 order-md1 mb-5>
                    <h4 class="title body-2 font-weight-bold">Контакты</h4>
                    <ul class="navigation__list">
                        <li>
                            <span class="body-1 font-weight-light navigation__text">
                                Email <a class="nav-link font-weight-medium" href="mailto:neovision@info.com">neovision@info.com</a>
                            </span>
                        </li>
                        <li>
                            <span class="body-1 font-weight-light navigation__text">
                                <v-icon small>mdi-cellphone-iphone</v-icon>
                                <a class="nav-link font-weight-regular" href="tel:+7 (917) 817-86-48">+7 (917) 817-86-48</a>
                            </span>
                        </li>
                        <li>
                            <span class="body-1 font-weight-light navigation__text">
                                <v-icon small>mdi-telegram</v-icon>
                                <a class="nav-link font-weight-medium" href="#">channel_name_telegram</a>
                            </span>
                        </li>
                        <li></li>
                        <li class="location">
                            <span class="body-1 font-weight-medium navigation__text">
                                График работы: <br />
                            </span>
                            <span class="body-1 font-weight-light navigation__text">
                                Пн - пт, 10:00 - 20:00 <br />
                                Сб, Вс - выходные
                            </span>
                        </li>
                    </ul>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex md3 xs12 class=" text-xs-left" order-xs1 order-md2 mb-5>
                    <h4 class="title body-2 font-weight-bold">Информация</h4>
                    <ul class="navigation__list">
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">Доставка & Возврат</a>
                        </li>
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">Оплата</a>
                        </li>
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">Гарантия</a>
                        </li>
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">Контакты</a>
                        </li>
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">Оптовая закупка</a>
                        </li>
                    </ul>
                </v-flex>
                <v-flex md3 xs12 class=" text-xs-left" order-xs2 order-md3 mb-5>
                    <h4 class="title body-2 font-weight-bold">FAQ</h4>
                    <ul class="navigation__list">
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">Do I need an account to place an order?</a>
                        </li>
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">How do I return or exchange?</a>
                        </li>
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">Do you ship to my country?</a>
                        </li>
                        <li>
                            <a class="nav-link nav-link--decor font-weight-light" href="#">How much does the delivery cost?</a>
                        </li>
                    </ul>
                </v-flex>
            </v-layout>
        </v-container>
    </v-dialog>
</template>

<script>
// import { eventBus } from '@/main.js'

export default {
    props: ['visible'],
    computed: {
        close: {
            get () {
                return this.visible
            },
            set (value) {
                if (!value) {
                  this.$emit('close')
                }
            }
        }
    }
}
</script>
<style lang="scss">
@import "../assets/theme";

.navigation {
    &__header {
        margin-bottom: 6rem;
    }

    &__logo {
        width: 120px;
        margin-top: 6px;
    }

    &__content {
        padding-bottom: 2.4rem;
    }

    &__inner {
        .title {
            margin-bottom: 2rem;
        }
    }

    &__list {
        li {
            margin-bottom: .42017rem;
        }

        .location {
            padding-left: 1.6rem;
            border-left: 1px solid #ccc;
            margin-top: 3.2rem;
        }

        .nav-link {
            color: $black;
        }
    }

    &__text {
        line-height: 1.2;
        letter-spacing: .01rem;
    }
}
</style>
