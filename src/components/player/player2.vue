<template>
  <div class='player' v-show="playList.length>0">
    <div class="normal-player" v-show="fullScreen">
      播放器
    </div>
    <div class="mini-player" v-show="!fullScreen"></div>
  </div>
</template>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  
</style>
<script type='text/ecmascript-6'>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'fullScreen',
      'playList'
    ])
  }
}
</script>
