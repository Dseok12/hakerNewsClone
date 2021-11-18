<template>
  <div class='ask'>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import ListMixin from '../mixin/ListMixin'
import bus from '../utils/bus'

export default {
  components: {
    ListItem
  },
  mounted () {
    bus.$emit('end:spinner')
  }
  // mixins: [ListMixin],
  // created () {
  //   bus.$emit('start:spinner')
  //   this.$store.dispatch('FECH_ASK')
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
