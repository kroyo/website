import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageByBingJson' : '';

//https://bing.ioliu.cn/v1/?type=json

// 获取必应背景图片
export const apiBgImg = () => {
  return axios.get(baseURL).then(res => res)
}