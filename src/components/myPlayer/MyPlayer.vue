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
  import jsonp from 'jsonp'
  import SingerDetail from './singer-detail.vue'

  const commonParams = { // 通用的请求参数
    g_tk: 5381,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  }
  const urlData = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'cn_woman_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    paltform: 'yqq'
  })

  const options = {
    param: 'jsonpCallback'
  }

  /**
   * 解析对象格式的数据为url参数形式
   * **/
  function parseUrl (url, data) {
    let params = ''
    for (let key in data) {
      params += `&${key}=${data[key]}`
    }
    params = params.substring(1)
    return `${url}?${params}`
  }

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
      this.getLists(url, urlData)
    },
    methods: {
      getLists (url, urlData) {
        url = parseUrl(url, urlData)
        jsonp(url, options, (err, res) => {
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
