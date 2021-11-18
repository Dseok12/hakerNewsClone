<template>
  <div class='itemview'>
    <div class="inner">
      <section>
        <!-- 사용자 상세 정보 -->
        <user-profile :info="fechedItem">
          <router-link slot="username" :to="`user/${fechedItem.user}`">
            {{ fechedItem.user }}
          </router-link>
          <template slot="time">{{ 'Posted ' + fechedItem.time_ago }}</template>
        </user-profile>
      </section>
      <section>
        <h2>{{fechedItem.title}}</h2>
      </section>
      <section>
        <!-- 질문 댓글 -->
        <div v-html="fechedItem.content" class="content-margin"></div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fechedItem'])
  },
  created () {
    const itemId = this.$route.params.id
    this.$store.dispatch('FECH_ITEM', itemId)
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
}
.fa-user{
  font-size: 2rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
.content-margin{
  margin-top: 2rem;
}
</style>
