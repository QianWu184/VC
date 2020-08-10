<template>
  <div id="message">
    <h3><a :href="workInfo.url" target="_blank">{{workInfo.name}}</a></h3>
    <p>{{workInfo.startTime}}-{{workInfo.endTime}}</p>
    <div class="content">{{workInfo.message}}</div>
  </div>
</template>
<script>
export default {
  name: 'message-card',
  props:{
    workInfo: {
      type: Object,
      request: true
    }
  },
  data(){
    return{

    }
  },
}
</script>
<style scoped>
  #message{
    width: 280px;
    margin: 5px 5px;
    height: 220px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0, 0.8);
    text-align: center;
  }
  .content{
    text-align: left;
  }
</style>