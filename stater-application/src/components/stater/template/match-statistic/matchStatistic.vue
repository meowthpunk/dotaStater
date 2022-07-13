<template>
  <div class="match-statistic">
    <div class="statistic">
      <p class="kda"> {{kda.kills}} / {{kda.deaths}} / {{kda.assists}}</p>
      <div v-if="isWin === true" class="win score"><p>Win</p></div>
      <div v-else class="lose score"><p>Lose</p></div>
    </div>
    <kda-progress-bar :kills="kda.kills" :deaths="kda.deaths" :assists="kda.assists" class=""/>
  </div>
</template>
<script>

import kdaProgressBar from './kdaProgressBar.vue'
export default{
  components:{
    kdaProgressBar,
  },
  props:{
    kda: Object,
    isWin: Boolean,
  },
}
</script>
<style scoped>
.kda{
  color: #fff;
}
.score{
  color: #fff;
  background-color: #ea030e;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  width: 60px;
  color: #3a3a3a;
}
.score p{
  font-size: 16px;
  margin: 0;
}
.lose{
  background-color: #ff1c37;
}
.win{
  background-color: #9efc4c;
}
.pg-bar{
  height: 20px;
}
p{
  margin: 0;
  font-size: 24px;
}
.statistic{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  margin-bottom: 6px;
}

.match-statistic{
  background-color: #3a3a3a;
  padding: 6px 14px 14px 14px;
}
</style>
