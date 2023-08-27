<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png" alt="" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.top {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;

  .content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img{
        width: 50px;
        height: 50px;
      }

      p{
        margin-left: 20px;
        font-size: 20px;
        color: #55a6fe;
      }
    }

    .right{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .help{
        margin-right: 20px;
      }
    }
  }
}
</style>
