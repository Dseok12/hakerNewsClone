<template>
  <div class='inner'>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <slot name="username">
          <!-- 상위컴포넌트에서 정의할 영역 -->
        </slot>
        <div class="time">
          <slot name="time">
            <!-- 상위컴포넌트에서 정의할 영역 -->
          </slot>
        </div>
        <slot name="karma">
          <!-- 상위컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
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
