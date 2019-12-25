<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    
  }
}
</script>
<style>
html,
body {
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
}
#app{
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>