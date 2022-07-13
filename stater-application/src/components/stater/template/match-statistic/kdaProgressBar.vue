<template>
  <div class="pg-bar">
    <div v-for="idx in kills" :key="idx" class="pg-bar-item pg-kills"></div>
    <div v-for="idx in deaths" :key="idx" class="pg-bar-item pg-deaths"></div>
    <div v-for="idx in assists" :key="idx" class="pg-bar-item pg-assists"></div>
  </div>
</template>
<script>
export default{
  props:{
    kills: Number,
    deaths: Number,
    assists: Number,
  },
  computed:{
    setEr(){
      return this.kills + this.deaths + this.assists
    },
  }
}
</script>
<style scoped>
.pg-bar-item{
  height: 100%;
  flex-grow: 1;
}
.pg-kills{
  background-color: #9efc4c;
}
.pg-deaths{
  background-color: #ff1c37;
}
.pg-assists{
  background-color: #979797;
}
.pg-bar{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  width: 100%;
}
</style>
