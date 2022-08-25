<script setup>
const prop = defineProps({
  showGotop: {
    require: true,
    default: true
  }
})

const gotop = () => {
  scrollTo(0, 0)
}
</script>

<template>
  <div class="gotop" v-if="prop.showGotop" @click="gotop"></div>
</template>

<style lang="scss" scoped>
.gotop {
  width: 40px;
  height: 40px;
  background: url('../assets/images/icon/gotop.png') no-repeat center;
  background-size: cover;
  cursor: pointer;
  position: fixed;
  right: 15px;
  bottom: 20px;
  z-index: 2;
  transition: .3s;

  &:hover {
    background: url('../assets/images/icon/gotop-hover.png') no-repeat center;
  }

  @include lg {
    width: 56px;
    height: 56px;
  }
}
</style>
