<template>
  <div class='news'>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus'
// import ListMixin from '../mixin/ListMixin'

export default {
  components: {
    ListItem
  }
  // mixins: [ListMixin]
  // created () {
  //   bus.$emit('start:spinner')
  //   this.$store.dispatch('FECH_NEWS')
  //     .then(() => {
  //       console.log('fetched')
  //       bus.$emit('end:spinner')
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
}
</script>

<style scoped>

</style>
