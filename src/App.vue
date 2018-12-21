<template>
    <v-app id="app">
        <Drawer @click.prevent="showMenu()"></Drawer>
        <v-content>
            <v-container>
                <router-view/>
                <Modal
                    class="navigation"
                    :visible="menu"
                    @close="menu = false"
                />
            </v-container>
            <!-- <v-layout> -->
            <!-- </v-layout> -->
        </v-content>
    </v-app>
</template>

<script>
import Drawer from './components/Drawer'
import Modal from './components/Modal'
import { eventBus } from './main'

export default {
    components: {
        Drawer,
        Modal
    },
    data: () => {
        return ({
            menu: false
        })
    },
    methods: {
        showMenu () {
            this.menu = !this.menu
        }
    },
    created: function () {
        eventBus.$on('open', this.showMenu)
    }
}
</script>

<style lang="scss">
@import "assets/theme";

#app {
  /*background: #909090;*/
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.application.theme--light {
    background: #fff;

    .v-dialog__content {
        align-items: flex-start;
    }

    .v-dialog {
        border-radius: 0;
        background: $white;
        margin: 8px;
        max-height: 95%;
    }
}
</style>
