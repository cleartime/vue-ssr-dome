<template>
  <div id="app">
    <Gmenu></Gmenu>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
import Gmenu from './components/header'
export default {
    components: {
      Gmenu
    },
}
</script>
<style lang="stylus">
@import './style/base';
</style>
