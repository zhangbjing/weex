<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    font-size: .14rem;
    font-family: '思源黑体'; 
  }
  html{
    font-size: 625%;
  }
  .wrapper{
    width: 100%;
    height: 100%;
  }
</style>
