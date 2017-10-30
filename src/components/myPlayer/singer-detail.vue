<template>
  <transition name="fade-left">
    <div class="detail">

    </div>
  </transition>
</template>

<script>
//  const commonParams = { // 通用的请求参数
  //    g_tk: 5381,
  //    inCharset: 'utf-8',
  //    outCharset: 'utf-8',
  //    notice: 0,
  //    format: 'jsonp'
  //  }
  //  const urlData = Object.assign({}, commonParams, {
  //    loginUin: 0,
  //    hostUin: 0,
  //    needNewCode: 0,
  //    paltform: 'yqq',
  //    order: 'listen',
  //    songstatus: 1,
  //    num: 30,
  //    begin: 0
  //  })
  export default {
    props: ['singerId'],
    created () {

    }
  }
</script>

<style lang="scss">
  .fade-left-enter-active, fade-left-leave-active {
    transition: transform .2s linear;
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
    background-color: #fff;
  }
</style>
