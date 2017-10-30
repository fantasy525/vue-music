/**
 * Created by zxf on 2017/10/29.
 */
import jsonp from 'jsonp'

export function songExplor (num, name) {
  let url = `http://s.music.qq.com/fcgi-bin/music_search_new_platform?
 t=0
 &n=${num}
 &aggr=1
 &cr=1
 &loginUin=0
 &format=json
 &inCharset=GB2312
 &outCharset=utf-8
 &notice=0
 &platform=jqminiframe.json
 &needNewCode=0
 &p=1&catZhida=0
 &remoteplace=sizer.newclient.next_song
 &w=${name}`
  return new Promise((resolve, reject) => {
    jsonp(url, { param: 'jsonpCallback' }, (err, data) => {
      if (!err) {
        resolve(data)
      }
      else {
        reject(err)
      }
    })
  })
}

