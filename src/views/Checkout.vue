<template>
    <div class="checkout">
        <v-container pa-4 class="checkout__inner">
            <v-layout align-start justify-space-between row wrap>
                <v-flex xs8 pr-4>
                    <v-layout align-start justify-space-between row wrap text-xs-left>
                        <v-form
                                class="form-checkout"
                                @submit.prevent="submit"
                        >
                            <v-flex class="form-group" xs-12 mb-4 pb-3>
                                <h1 class="font-weight-medium title">1. Детали</h1>
                            </v-flex>
                            <v-flex xs-12 mb-5>
                                <v-layout justify-space-between row>
                                    <v-flex xs6 pr-4>
                                        <v-text-field
                                                class="mb-3"
                                                v-model="firstname"
                                                :error-messages="firstnameErrors"
                                                label="Ваше имя*"
                                                @input="$v.firstname.$touch()"
                                                @blur="$v.firstname.$touch()"
                                                required
                                        ></v-text-field>
                                        <v-text-field
                                                class="mb-3"
                                                v-model="phone"
                                                :error-messages="phoneErrors"
                                                placeholder="+7 (999)-999-99-99"
                                                mask="+# (###) ###-##-##"
                                                label="Телефон*"
                                                @input="$v.phone.$touch()"
                                                @blur="$v.phone.$touch()"
                                                required
                                        ></v-text-field>
                                        <v-text-field
                                                class="mb-3"
                                                v-model="city"
                                                :error-messages="cityErrors"
                                                label="Город*"
                                                placeholder="Москва"
                                                @input="$v.city.$touch()"
                                                @blur="$v.city.$touch()"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-text-field
                                                class="mb-3"
                                                v-model="lastname"
                                                :error-messages="lastnameErrors"
                                                label="Фамилия*"
                                                @input="$v.lastname.$touch()"
                                                @blur="$v.lastname.$touch()"
                                                required
                                        ></v-text-field>
                                        <v-text-field
                                                class="mb-3"
                                                v-model="email"
                                                :error-messages="emailErrors"
                                                label="E-mail*"
                                                required
                                        ></v-text-field>
                                        <v-text-field
                                                class="mb-3"
                                                v-model="street"
                                                :error-messages="streetErrors"
                                                label="Улица*"
                                                placeholder="ул. Ленина"
                                                @input="$v.street.$touch()"
                                                @blur="$v.street.$touch()"
                                                required
                                        ></v-text-field>
                                        <v-flex xs12>
                                            <v-layout justify-space-between row>
                                                <v-flex xs4 pr-2>
                                                    <v-text-field
                                                            class="mb-3"
                                                            v-model="house"
                                                            :error-messages="houseErrors"
                                                            label="Дом*"
                                                            @input="$v.house.$touch()"
                                                            @blur="$v.house.$touch()"
                                                            required
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs4 pr-2>
                                                    <v-text-field
                                                            class="mb-3"
                                                            v-model="room"
                                                            :error-messages="roomErrors"
                                                            label="Квартира*"
                                                            @input="$v.room.$touch()"
                                                            @blur="$v.room.$touch()"
                                                            required
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs4>
                                                    <v-text-field
                                                            v-model="index"
                                                            label="Индекс"
                                                    ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs-12>
                                <v-layout justify-space-between row>
                                    <v-flex xs6 pr-4 pb-3>
                                        <v-flex class="form-group" pb-3>
                                            <h3 class="font-weight-medium title">2. Доставка</h3>
                                        </v-flex>
                                    </v-flex>
                                    <v-flex xs6 pb-3>
                                        <v-flex class="form-group" pb-3>
                                            <h3 class="font-weight-medium title">3. Оплата</h3>
                                        </v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs-12 mb-5 pr-4 pb-3>
                                <v-layout justify-space-between row>
                                    <v-flex xs6 pr-4>
                                        <v-radio-group v-model="shipping" :mandatory="false">
                                            <ul class="shipping-list">
                                                <li>
                                                    <span>
                                                        <v-radio
                                                                class="input-ratio"
                                                                label="Почта России | 4 - 8 дн."
                                                                value="free"
                                                        ></v-radio>
                                                    </span>
                                                    <span class="shipping-price">
                                                        бесплатно
                                                    </span>
                                                </li>
                                                <v-divider></v-divider>
                                                <li>
                                                    <span>
                                                        <v-radio
                                                                class="input-ratio"
                                                                label="EMS | 2 - 3 дн."
                                                                value="paid"></v-radio>
                                                    </span>
                                                    <span class="shipping-price">
                                                        450
                                                    </span>
                                                </li>
                                            </ul>
                                        </v-radio-group>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-flex>
                                            <iframe
                                                frameborder="0"
                                                allowtransparency="true"
                                                scrolling="no"
                                                src="https://intellectmoney.ru/ru/enter/acceptpay/userPaymentForm/?route[UserPaymentForm]=Form/Get&FormId=1716&FormType=IMAccount&AccountId=1267192814&PaymentWriter=Seller&PaymentName=%CE%EF%EB%E0%F2%E0%20%EF%F0%EE%E4%F3%EA%F6%E8%E8&PaymentTip=&Amount=&ButtonName=Pay&IsCommentField=&CommentName=%CA%EE%EC%EC%E5%ED%F2%E0%F0%E8%E9&CommentTip=&IsFIOField=1&IsEmailField=1&IsPhoneField=1&SuccessUrl=" width="460" height="297">
                                            </iframe>
                                        </v-flex>
                                        <v-checkbox v-model="policy">
                                            <span class="caption" slot="label">
                                                Согласен(-на) на обработку персональных данных
                                            </span>
                                        </v-checkbox>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12 text-xs-right>
                                <v-btn
                                        class="btn-order"
                                        flat
                                        large
                                        type="submit"
                                        :disabled="submitStatus === 'PENDING'"
                                        @click="submit"
                                >
                                    Заказать
                                </v-btn>
                                <p class="caption" v-if="submitStatus === 'SUCCESS'">Thanks for your submission!</p>
                                <p class="caption" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                                <p class="caption" v-if="submitStatus === 'PENDING'">Sending...</p>
                            </v-flex>
                        </v-form>
                    </v-layout>
                </v-flex>
                <v-flex xs4 text-xs-left>
                    <v-layout column>
                        <v-flex class="order" px-4 py-2 text-xs-left>
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
                                      <span class="font-weight-medium subheading text-xs-center">К оплате</span>
                                      <span class="font-weight-medium subheading text-xs-center">{{ getTotalPrice }}</span>
                                  </li>
                              </ul>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
// import axios from 'axios'

export default {
    mixins: [validationMixin],
    validations: {
        firstname: { required, maxLength: maxLength(10) },
        lastname: { required },
        phone: { required, minLength: minLength(11) },
        email: { required, email },
        city: { required },
        street: { required },
        house: { required },
        room: { required }
    },
    data: () => ({
        firstname: null,
        lastname: null,
        phone: null,
        email: null,
        city: null,
        street: null,
        house: null,
        room: null,
        index: null,
        shipping: 'free',
        policy: false,
        submitStatus: null
    }),
    computed: {
        ...mapGetters({
            items: 'getStock',
            getTotal: 'getTotal',
            getTotalPrice: 'getTotalPrice'
        }),
        firstnameErrors () {
            const errors = []
            if (!this.$v.firstname.$dirty) return errors
            !this.$v.firstname.required && errors.push('Обязательное поле для заполнения')
            !this.$v.firstname.maxLength && errors.push('Имя должно содержать не больше 10 знаков')
            return errors
        },
        lastnameErrors () {
            const errors = []
            if (!this.$v.lastname.$dirty) return errors
            !this.$v.lastname.required && errors.push('Обязательное поле для заполнения')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Введите корректный e-mail')
            !this.$v.email.required && errors.push('Обязательное поле для заполнения')
            return errors
        },
        phoneErrors () {
            const errors = []
            if (!this.$v.phone.$dirty) return errors
            !this.$v.phone.required && errors.push('Обязательное поле для заполнения')
            !this.$v.phone.minLength && errors.push('Введите корректный номер')
            return errors
        },
        cityErrors () {
            const errors = []
            if (!this.$v.city.$dirty) return errors
            !this.$v.city.required && errors.push('Обязательное поле для заполнения')
            return errors
        },
        streetErrors () {
            const errors = []
            if (!this.$v.street.$dirty) return errors
            !this.$v.street.required && errors.push('Обязательное поле для заполнения')
            return errors
        },
        houseErrors () {
            const errors = []
            if (!this.$v.house.$dirty) return errors
            !this.$v.house.required && errors.push('Обязательное поле для заполнения')
            return errors
        },
        roomErrors () {
            const errors = []
            if (!this.$v.room.$dirty) return errors
            !this.$v.room.required && errors.push('Обязательное поле для заполнения')
            return errors
        }
    },
    methods: {
        ...mapActions([
            'addItem',
            'removeItem',
            'clearCart'
        ]),
        submit () {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    this.submitStatus = 'SUCCESS'
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.checkout {
    padding-top: 50px;

    .form-checkout {
        width: 100%;
    }

    .shipping-list {
        .input-ratio {
            margin-bottom: 0;
        }

        li {
            margin: 12px auto 6px;
            @include justify;
        }
    }
}
</style>
