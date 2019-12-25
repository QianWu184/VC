<template>
    <div class="user">
      <Avatar icon="ios-person" size="large" />
      <div class="user-message user-name">{{name}}</div>
      <div class="user-message">{{skills.join(',')}}</div>
      <div class="user-message">{{email}}</div>
      <div class="showbtn" @click="isShow">
        <i-icon v-if="!showUserPanel" type="md-arrow-dropdown-circle" />
        <i-icon v-else type="md-arrow-dropup-circle" />
      </div>
    </div>
</template>
<script>
import data from "../datas/user";

export default {
  name: "user",
  props:['showUserPanel'],
  data() {
    return {
      ...data,
    };
  },
  mounted() {},
  methods: {
    isShow() {
      this.$emit('showPanel', this.showUserPanel);
    }
  }
};
</script>
<style scoped>
.user {
  color: #5ed0dc;
  width: 200px;
  font-size: 16px;
  max-width: 300px;
  height: 200px;
  max-height: 400px;
  transition:width .5s, height .5s;
  position: relative;
  padding: 20px 0;
  text-align: center;
  border: 1px solid #2b92d4;
  border-radius: 4px;
  background-color: rgba(0, 20, 250, 0.5);
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
.user-message {
  margin: 12px 0px;
}
.user-name {
  font-weight: bold;
  font-size: 18px;
}
.showbtn {
  position: absolute;
  z-index: 10;
  width: 25px;
  bottom: -30px;
  margin-left: 45%;
  text-align: center;
  height: 25px;
}
</style>