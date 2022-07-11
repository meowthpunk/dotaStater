<template lang="html">
  <hero-info
    :heroId="this.heroId"
  />

  <match-info
    :settings="this.matchSettings"
    v-show="false"
  />

  <match-statistic
    :kda="this.kda"
    :isWin="this.isWin"
  />
</template>

<script>
import heroInfo from './hero-info/heroInfo.vue'
import matchInfo from './match-info/matchInfo.vue'
import matchStatistic from './match-statistic/matchStatistic.vue'

export default {
  components:{
    heroInfo,
    matchInfo,
    matchStatistic,
  },
  props:{
    heroId: Number,
    matchSettings: Object,
    kda: Object,
    isWin: Boolean,
  }
}
</script>

<style lang="css" scoped>
</style>
