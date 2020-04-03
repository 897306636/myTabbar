<template>
    <div>
        <tabbar>
            <tabbar-item path="/home" activeColor="#f42066">
                <img slot="item-icon" src="../../assets/img/tabbar/home.svg">
                <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg">
                <div slot="item-text">首页</div>
            </tabbar-item>
            <tabbar-item path="/category" activeColor="#f42066">
                <img slot="item-icon" src="../../assets/img/tabbar/category.svg">
                <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg">
                <div slot="item-text">分类</div>
            </tabbar-item>
            <tabbar-item path="/cart" activeColor="#f42066">
                <img slot="item-icon" src="../../assets/img/tabbar/cart.svg">
                <img slot="item-icon-active" src="../../assets/img/tabbar/cart_active.svg">
                <div slot="item-text">购物车</div>
            </tabbar-item>
            <tabbar-item path="/profile" activeColor="#f42066">
                <img slot="item-icon" src="../../assets/img/tabbar/profile.svg">
                <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg">
                <div slot="item-text">我的</div>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import tabbar from '../tabbar/tabbar.vue'
import tabbarItem from '../tabbar/tabbarItem.vue'
export default {
  name: 'mainTabbar.vue',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style scoped>

</style>
