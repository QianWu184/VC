<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>
 
<script>
 
// 导出组件
export default {
  name: "cesiumView",
  data() {
    return {};
  },
  mounted () {
    console.log(this)
    const viewer = new this.Cesium.Viewer('cesiumContainer')
  },
 
};
</script>
 
<style scoped>
 
#cesiumContainer {
  width: 100%;
  height: 100%;
}
 
</style>