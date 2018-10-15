<template>
    <v-app id="app">
        <v-content>
            <Drawer @click.prevent="showMenu()" />
            <router-view/>
        </v-content>
        <v-container>
            <v-layout>
              <Modal
                  class="navigation"
                  :visible="menu"
                  @close="menu = false"
              />
            </v-layout>
        </v-container>
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
    background: #eae8ee;

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
