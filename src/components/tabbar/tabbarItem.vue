<template>
    <div class="tab-bar-item" @click="isClick">
        <div v-if="!isActive"><slot name="item-icon" src="./assets/img/tabbar/home.svg"></slot></div>
        <div v-else><slot name="item-icon-active" src="./assets/img/tabbar/home_active.svg"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabbarItem.vue',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f42066'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      // console.log(this.$route.path)
      // console.log(this.$route.path.indexOf(this.path))
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    isClick () {
      console.log('点击了该事件')
      // eslint-disable-next-line no-unused-expressions
      this.$route.path !== this.path ? this.$router.replace(this.path) : null// 防止多次点击相同按钮
    }
  }
}
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    .tab-bar-item img{
        margin-top: 3px;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
</style>
