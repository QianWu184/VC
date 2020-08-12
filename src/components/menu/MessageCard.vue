<template>
  <div id="message">
    <div>
      <h3 class="company-name">
      <a :href="workInfo.url" target="_blank">{{ workInfo.name }}</a> 
    </h3>
      <Icon type="ios-flag"  size="30" :color="selected?'#2d8cf0': ''"/>
    </div>
    <p>{{ workInfo.startTime }}~{{ workInfo.endTime }}</p>
    <div class="content">{{ workInfo.message }}</div>
  </div>
</template>
<script>
export default {
  name: "message-card",
  props: {
    workInfo: {
      type: Object,
      request: true
    },
    workNum:{
      type: Number,
      request: true
    },
    selectWorkIndex:{
      type: Number,
      request :true
    }
  },
  data() {
    return {};
  },
  methods:{
    selectedSelf(){
      this.selected = true
    } 
  },
  computed:{
      selected:function(){
        return this.selectWorkIndex == this.workNum
      }
  }
};
</script>
<style scoped>
#message {
  width: 280px;
  margin: 5px 5px;
  height: 220px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  text-align: center;
  cursor: pointer;
}
.content {
  padding: 0px 10px;
  text-align: left;
  text-indent: 10px;
}
.company-name{
  display: inline-block;
  width: 80%;

}
</style>
