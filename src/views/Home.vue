<template>
  <div class="home">
    <mt-header title="王利民的蛋糕店" fixed></mt-header>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">1</mt-tab-container-item>
      <mt-tab-container-item id="2">2</mt-tab-container-item>
      <mt-tab-container-item id="3">3</mt-tab-container-item>
      <mt-tab-container-item id="4">4</mt-tab-container-item>
      <mt-tab-container-item id="5">5</mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="1">
        <img
          v-if="selected == '1'"
          slot="icon"
          src="../../public/img/b_nav/home.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-home-hover.png"
        />
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        <img
          v-if="selected == '2'"
          slot="icon"
          src="../../public/img/b_nav/icon-cake.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-cake-hover.png"
        />
        新鲜蛋糕
      </mt-tab-item>
      <mt-tab-item id="3">
        <img
          v-if="selected == '3'"
          slot="icon"
          src="../../public/img/b_nav/icon-tel.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-tel-hover.png"
        />
        电话订购
      </mt-tab-item>
      <mt-tab-item id="4">
        <img
          v-if="selected == '4'"
          slot="icon"
          src="../../public/img/b_nav/icon-cart.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-cart-hover.png"
        />
        购物车
      </mt-tab-item>
      <mt-tab-item id="5">
        <img
          v-if="selected == '5'"
          slot="icon"
          src="../../public/img/b_nav/icon-me.png"
        />
        <img
          v-else
          slot="icon"
          src="../../public/img/b_nav/icon-me-hover.png"
        />
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // tabbar选项卡的选中
      selected: "1",
    };
  },
  methods:{
    list(){
      this.$router.push('/list');
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}
.home {
  margin-top: 40px;
}
</style>

