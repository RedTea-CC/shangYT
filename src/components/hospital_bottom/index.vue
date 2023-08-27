<template>
  <div class="bottom">
    <div class="content">
      <div class="left">京-备案号</div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.bottom {
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;

  .content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right{
      span{
        margin: 0 5px;
      }
    }
  }
}
</style>
