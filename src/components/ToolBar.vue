<template>
  <div class='header'>
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  data () {
    return {
      sampleData: ''
    }
  },
  created () {
    // 컴포넌트가 생성되자마자 실행되는 로직이 들어가는 곳
  },
  methods: {
    // 각종 함수 모아 놓는 곳
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  padding: 1rem 0;
  background: #42b883;
  display: flex;
  color: white;
  a{
    color: white;
    font-weight: 600;
    margin: 0 10px 0 10px;
  }
  .router-link-exact-active{
    color: #05492b;
  }
}
</style>
