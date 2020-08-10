<template>
  <div id = "userInfo">
    <Avatar  :src='imageUrl' size="large"></Avatar>
    <div class="user-detail">
      <h3>{{userData.name}}</h3>
      <h4>{{userData.age}}岁|{{userData.location.place}}</h4>
      <p><Icon type="ios-call" />{{userData.photoUrl}}</p>
      <p><Icon type="ios-mail" />{{userData.email}}</p>
      <div>
         <Tag v-for="(item, index ) in userData.skills" :key="index" :color="randomColor()">{{item}}</Tag>
      </div>
    </div>
  </div>
</template>
<script>
import { Avatar, Tag  } from 'iview'
export default {
  name: 'Info',
  props:{
    userData: {
      type: Object,
      request: true
    }
  },
  data(){
    return {
      imageUrl: require("@/assets/images/author2.jpg"),
      message: ' 这是一段文字'
    }
  },
  mounted(){
    
  },
  methods:{
    randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
  },
  components:{
    Avatar,
    Tag
  }
}
</script>
<style scoped>
#userInfo{
  width:100%;
  text-align: center;
}
.user-detail{
  margin-top: 10px;
}
</style>