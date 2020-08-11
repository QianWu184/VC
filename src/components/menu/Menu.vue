<template>
  <div id="menu">
    <Tabs class="menu-tabs" size="small" v-model="selectTabs">
      <Tab-pane class="tab-pane" label="个人简介">
        <Info :userData="userData"></Info>
      </Tab-pane>
      <Tab-pane class="tab-pane" label="工作经历">
        <div>
          <MessageCard
            v-for="(item, index) in userData.infos"
            :key="index"
            :workInfo="item"
            :workNum="index"
            @click.native="changeChart(item, index)"
          ></MessageCard>
        </div>
      </Tab-pane>
      <Tab-pane class="tab-pane" label="其他"> </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
import MessageCard from "./MessageCard";
import Info from "./Info";
export default {
  name: "",
  props: {
    userData: {
      type: Object,
      request: true
    }
  },
  data() {
    return {
      selectTabs: 1,
      showSelf: false,
      selectWorkIndex: null
    };
  },
  components: {
    MessageCard,
    Info
  },
  mounted(){
    this.showWork(this.userData.infos[0])
  },
  methods: {
    chartPaneTrigger(index) {
      if (!this.showSelf || this.selectWorkIndex == index) {
        this.showSelf = !this.showSelf;
        this.$emit("chartPaneTrigger", this.showSelf);
      }
    },
    changeChart(work, index) {
      this.chartPaneTrigger(index);
      if (this.selectWorkIndex != index) {
        this.selectWorkIndex = index;
        this.showWork(work);
      }
    },
    showWork(work) {
      this.$emit("showWork", work);
    }
  }
};
</script>
<style scoped>
#menu {
  width: 300px;
  height: 800px;
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 1000;
  background-color: #ffffff;
  border-radius: 10px;
}
#menu > div {
  background-color: #ffffff;
  border-radius: 10px;
}
.menu-tabs {
  padding: 0 5px;
}
.tab-pane {
  width: 100%;
  height: 100%;
}
</style>
