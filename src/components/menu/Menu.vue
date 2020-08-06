<template>
  <div id="menu">
    <Tabs class="menu-tabs" size="small">
      <Tab-pane class="tab-pane" label="个人简介"> </Tab-pane>
      <Tab-pane class="tab-pane" label="工作经历">
        <MessageCard></MessageCard>
      </Tab-pane>
      <Tab-pane class="tab-pane" label="其他"> </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
import MessageCard from "./MessageCard";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    MessageCard
  }
};
</script>
<style scoped>
#menu {
  width: 300px;
  height: 600px;
  position: absolute;
  top: 20px;
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
.tab-pane{
  width: 100%;
  height: 100%;
}
</style>
