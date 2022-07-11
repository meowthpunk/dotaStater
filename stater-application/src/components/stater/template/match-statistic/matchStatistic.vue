<template>
  <div class="match-statistic">
    <div class="statistic">
      <p v-if="isWin === true" class="win"> Win </p>
      <p v-else class="lose"> Lose </p>
      <p class="kda"> {{kda.kills}} | {{kda.deaths}} | {{kda.assists}}</p>
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
.win{
  color: #a1ca52;
}
.lose{
  color: #ea030e;
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
}

.match-statistic{
  background-color: #3a3a3a;
  padding: 6px 14px 14px 14px;
}
</style>
