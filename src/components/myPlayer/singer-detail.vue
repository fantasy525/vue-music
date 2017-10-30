<template>
  <transition name="fade-left">
    <div class="detail">

    </div>
  </transition>
</template>

<script>
  export default {
    props: ['singerId']
  }
</script>

<style lang="scss">
  .fade-left-enter-active, fade-left-leave-active {
    transition: transform .5s linear;
  }

  .fade-left-enter, .fade-left-leave-to {
    transform: translate(100%, 0);
  }

  .detail {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color:#fff;
  }
</style>
