<template>
  <div id="app">
    <div class="nav">
      <tool-bar></tool-bar>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus'

export default {
  components: {
    ToolBar,
    Spinner
  },
  data () {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner () {
      this.loadingStatus = true
    },
    endSpinner () {
      this.loadingStatus = false
    }
  },
  created () {
    bus.$on('start:sipnner', () => this.startSpinner)
    bus.$on('end:sipnner', () => this.endSpinner)
  },
  beforeDestroy () {
    bus.$off('start:sipnner', this.startSpinner)
    bus.$off('end:sipnner', this.startSpinner)
  }
}
</script>

<style lang="scss">
@import './Global.scss';
#app {
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a{
  color: #000;
  transition: all .35s;
}
a:hover{
  color: #2c3e50;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
}
</style>
