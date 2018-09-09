<template>
  <div id="app">
    <v-app>
      <v-content>
        <Drawer />
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Drawer from './components/Drawer'

export default {
  name: 'App',
  components: {
    Drawer
  }
}
</script>

<style lang="scss">
@import "../node_modules/normalize-scss/sass/_normalize";

#app {
  /*background: #909090;*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.application.theme--light {
  background: #eae8ee;
}
</style>
