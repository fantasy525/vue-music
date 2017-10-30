<template>
  <div class="flex wrap">
    <ul>
      <li><input type="button" value="获取歌手列表"></li>
    </ul>
    <ul class="lists">
      <li v-for="(item , index) in lists" key="index" @click="selectSinger(item.Fsinger_mid)">
        <span> {{item.Fsinger_name}}</span>---歌手id:{{item.Fsinger_mid}}
      </li>
    </ul>
    <singer-detail :singer-id="singerId" v-if="isDetail"></singer-detail>
  </div>
</template>

<script>
  import SingerDetail from './singer-detail.vue'
  import { jsonp } from './util'

  /**
   * 解析对象格式的数据为url参数形式
   * **/
  
  export default {
    data () {
      return {
        lists: [],
        singerId: '',
        isDetail: false
      }
    },
    created () {
      let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
      let urlData = {
        channel: 'singer',
        page: 'list',
        key: 'cn_woman_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        paltform: 'yqq'
      }
      this.getLists(url, urlData)
    },
    methods: {
      getLists (url, urlData) {
        jsonp(url, urlData, (err, res) => {
          if (!err) {
            this.lists = res.data.list
            console.log(res)
          } else {
            console.log(err)
          }
        })
      },
      selectSinger (singerId) {
        this.singerId = singerId
        this.isDetail = true
      }
    },
    components: {
      SingerDetail,
      'singer-detail': SingerDetail
    }
  }
</script>

<style lang="scss">
  $highlight-color: #F90;
  .flex {
    display: flex;
  }

  .wrap {
    position: relative;
  }

  .lists li {
    line-height: 40px;
    & span {
      font-size: 18px;
      color: orange;
    }
  }
</style>
