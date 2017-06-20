<template>
<div :class="s.layout">
  <div id="slide">
    <div :class="s.logo">DMUI-Doc</div>
    <div :class="s.menu">
      <router-link :to="{ name: 'richEditor'}" :class="s.menuItem">
        <icon type="document-text" class="test"></icon>
        富文本编辑器
      </router-link>
      <router-link :to="{ name: 'demo2'}" :class="s.menuItem">
        <icon type="document-text" class="test"></icon>
        demo2
      </router-link>
    </div>
  </div>
  <div :class="s.content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style module="s">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 240px; //slide-width
  background: #f5f7f9;
}

.menu {
  height: 100%;
}

.menuItem {
  display: block;
  padding: 14px 24px;
  position: relative;
  cursor: pointer;
  transition: all .2s ease-in-out;
  outline: 0;
  font-size: 14px;
  border-right: 2px solid transparent;
  color: #495060;
  &:hover {
    color: #2d8cf0;
    border-right: 2px solid #2d8cf0;
  }
}

.logo {
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
}

.content {
  margin: 15px;
}
</style>
<style>
#slide {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px; //slide-width
  border-right: 1px solid #dddee1;

  .active {
    color: #2d8cf0;
    border-right: 2px solid #2d8cf0;
  }
}
</style>