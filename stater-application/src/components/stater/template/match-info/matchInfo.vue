<template lang="html">
  <div class="match-info">
    <div class="top">
      <p>{{this.settings.type}}</p>
      <p v-if="isHaveHours">{{this.hours}}:{{this.minutes}}:{{this.seconds}}</p>
      <p v-else>{{this.minutes}}:{{this.seconds}}</p>
    </div>
    <div class="bottom">
      <p>{{this.settings.mode}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchInfo',
  props:{
    settings: Object,
  },
  computed: {
    seconds: function(){
      return this.settings.duration.seconds;
    },
    minutes: function(){
      return this.settings.duration.minutes;
    },
    hours: function(){
      return this.settings.duration.hours;
    },
    isHaveHours: function(){
      return this.settings.duration.hours !== "0";
    }
  },
}
</script>

<style lang="css" scoped>
.top{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24px;
  color: #cccccc;
}
.bottom{
  font-size: 18px;
  color: #9a9a9a;
}
p{
  margin: 0;
}
.match-info{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 14px;
  background-color: #424242;
}
</style>
