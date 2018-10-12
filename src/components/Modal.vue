<template>
    <v-dialog
        v-model="close"
        full-width
        transition="slide-y-transition"
        class="navigation"
    >
        <v-container pa-2>
            <v-layout align-start justify-space-around row>
                <v-flex xs-5>
                    <h4 class="title">Контакты</h4>
                    <ul>
                        <li>Email neovision@info.com </li>
                        <li>+7 (917) 817-86-48</li>
                        <li></li>
                        <li>Тольятти, ул. Фрунзе 20 - 117</li>
                    </ul>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs-3>
                    <h4 class="title">Информация</h4>
                    <ul>
                        <li>Доставка</li>
                        <li>Возврат</li>
                        <li>Оплата</li>
                        <li>Гарантия</li>
                        <li>Контакты</li>
                    </ul>
                </v-flex>
                <v-flex xs-3>
                    <h4 class="title">FAQ</h4>
                    <ul>
                        <li>Do I need an account to place an order?</li>
                        <li>How do I return or exchange?</li>
                        <li>Do you ship to my country?</li>
                        <li>How much does the delivery cost?</li>
                    </ul>
                </v-flex>

                <button @click.stop="close = false">Close</button>
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
