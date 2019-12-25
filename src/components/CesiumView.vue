<template>
  <div id="map">
    <div id="cesiumContainer"></div>
    <div :class="[{'disapper': !showUser},'userPanel']">
      <User :showUserPanel="showUser" @showPanel="showUserPanel"></User>
    </div>
  </div>
</template>
 
<script>
// 导出组件
export default {
  name: "cesiumView",
  data() {
    return {
      showUser: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      let Cesium = this.Cesium;
      this.viewer = new Cesium.Viewer("cesiumContainer", {
        animation: false, //是否创建动画小器件，左下角仪表
        baseLayerPicker: false, //是否显示图层选择器
        fullscreenButton: false, //是否显示全屏按钮
        geocoder: false, //是否显示geocoder小器件，右上角查询按钮
        homeButton: false, //是否显示Home按钮
        infoBox: false, //是否显示信息框
        sceneModePicker: false, //是否显示3D/2D选择器
        selectionIndicator: false, //是否显示选取指示器组件
        timeline: false, //是否显示时间轴
        navigationHelpButton: false, //是否显示右上角的帮助按钮
        scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        clock: new this.Cesium.Clock(), //用于控制当前时间的时钟对象
        selectedImageryProviderViewModel: undefined, //当前图像图层的显示模型，仅baseLayerPicker设为true有意义
        imageryProviderViewModels: this.Cesium.createDefaultImageryProviderViewModels(), //可供BaseLayerPicker选择的图像图层ProviderViewModel数组
        selectedTerrainProviderViewModel: undefined, //当前地形图层的显示模型，仅baseLayerPicker设为true有意义
        terrainProviderViewModels: this.Cesium.createDefaultTerrainProviderViewModels(), //可供BaseLayerPicker选择的地形图层ProviderViewModel数组
        terrainProvider: new this.Cesium.EllipsoidTerrainProvider(), //地形图层提供者，仅baseLayerPicker设为false有意义
        fullscreenElement: document.body, //全屏时渲染的HTML元素,
        useDefaultRenderLoop: true, //如果需要控制渲染循环，则设为true
        targetFrameRate: undefined, //使用默认render loop时的帧率
        showRenderLoopErrors: false, //如果设为true，将在一个HTML面板中显示错误信息
        automaticallyTrackDataSourceClocks: true, //自动追踪最近添加的数据源的时钟设置
        contextOptions: undefined, //传递给Scene对象的上下文参数（scene.options）
        sceneMode: this.Cesium.SceneMode.SCENE3D, //初始场景模式
        mapProjection: new this.Cesium.WebMercatorProjection(), //地图投影体系
        dataSources: new this.Cesium.DataSourceCollection(),
        imageryProvider: new this.Cesium.UrlTemplateImageryProvider({
          url:
            "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"
        })
      });
      this.viewer._cesiumWidget._creditContainer.style.display = "none";
      //  this.viewer.imageryLayers.addImageryProvider(new Cesium.SingleTileImageryProvider({
      //   url:"/static/images/earth3.jpg"
      // }))
      this.viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
        url:"http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8"
      }))
      var point = Cesium.Cartesian3.fromDegrees(104.071216,30.663049, 15000000.0);
      this.viewer.camera.setView({
        destination: point,
      });
    });
  },
  methods:{
    showUserPanel(show){
      this.showUser = !show
    }
  }
};
</script>
 
<style scoped>
#map,
#cesiumContainer {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.userPanel{
  position: absolute;
  left: 40px;
  top: 50px;
  transition-property: top;
  transition-duration: 1.5s;
}
.disapper{
  animation: hiddenserPanel 1.5s;
  top: -200px;
}
@keyframes hiddenserPanel
{
  0%{
    top:50px;
  }
  10%{
    top: 60px;
  }
  100%{
    top: -200px;
  }
}
</style>