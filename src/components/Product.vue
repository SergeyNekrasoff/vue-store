<template>
    <div class="product">
        <div class="wrap-img">
            <img class="preview" src="../../static/preview2.png" alt="Bozlun умные часы">
        </div>
        <v-container class="product__details" pa-0>
            <v-layout align-center justify-space-between row fill-height>
                <!--<v-flex text-xs-right>-->
                    <!--<v-layout column>-->
                        <!--<span class="discount">- 20%</span>-->
                    <!--</v-layout>-->
                <!--</v-flex>-->
                <!--<v-flex></v-flex>-->
                <!--<v-flex justify-end>-->
                    <!--<v-layout column>-->
                        <!--<div class="product__head">-->
                            <!--<h1 class="product__title">Smart watches<br>Bozlun</h1>-->
                            <!--<span class="product__subtitle">Sport - Sleep - Find mobile</span>-->
                        <!--</div>-->
                        <!--<div class="product__price">-->
                            <!--<span class="price price&#45;&#45;new">4480р.</span>-->
                            <!--<s class="price price&#45;&#45;old">6780р.</s>-->
                        <!--</div>-->
                        <!--<div class="product__purchase">-->
                            <!--<v-btn outline large class="btn-add" @click="addItem">-->
                                <!--<span>В корзину</span>-->
                                <!--<v-icon>mdi-plus</v-icon>-->
                            <!--</v-btn>-->
                        <!--</div>-->
                    <!--</v-layout>-->
                <!--</v-flex>-->
                <div
                    v-for="(item, index) in products"
                    key="item"
                    :item="item"
                    :index="index">
                </div>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    // data: () => ({
    //     message: 'blow'
    // }),
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
        addItem () {
            this.$store.commit('addItem', this.item)
        }
    },
    computed: {
        // ...mapGetters([
        //     products
        // ])
        products () {
            return this.$store.getters.products
        }
    }

}
</script>

<style lang="scss">
.product {
    position: relative;

    &__details {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
    }
}

.wrap-img {
    position: relative;
    margin-top: 148px;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        width: 80vh;
        height: 80vh;
        background: #fff;
        margin-left: -40vh;
        margin-top: -40vh;
    }

    .preview {
        width: 250px;
        margin: 150px auto 0;
        position: relative;
        left: 10px;
        top: -86px;
    }
}
</style>