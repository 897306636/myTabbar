<template>
  <div>
      <router-view></router-view>
      <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from './components/mainTabbar/mainTabbar'
export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>

</style>
