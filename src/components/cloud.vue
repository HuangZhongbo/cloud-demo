<template id="myCloud">
    <div class="myCloud">
        <div class="header">
            <div class="logo">
                <img src="../../static/cloudlogo.jpg"/>
            </div>
            <div class="headMenus">
                <span v-for="(menu,index) in menus" :key="index">{{menu.title}}</span>
            </div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [
        {title: '我的网盘'},
        {title: '传输列表'},
        {title: '好友分享'},
        {title: '功能宝箱'},
        {title: '找资源'}
      ]
    }
  }
}
</script>
