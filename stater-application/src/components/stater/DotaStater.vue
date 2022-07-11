<template>
  <div class="matches">
    <div v-for="match, idx in matches" :key="idx" class="match">
      <match-template
        :heroId="match.heroInfo.id"
        :matchSettings="match.matchInfo.settings"
        :kda="match.heroInfo.statistic.kda"
        :isWin="match.matchInfo.isWin"
      />
    </div>
  </div>

</template>

<script>

import matchTemplate from './template/matchTemplate.vue'
import exportData from './based-arrays/exportData.js'

// async function gavno(){
//   let x = await exportData
//   return x
// }

export default {
  data(){
    return{
      showSettings: true,
      matches: null,
    }
  },
  components: {
    matchTemplate,
  },
  name: 'DotaStater',
  props: {
    msg: String
  },
  async mounted(){
    let x = await exportData
    this.matches = x.matches
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.match{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 256px;
  font-family: Poppins;
}
.matches{
  display: inline-grid;
  grid-template-columns: auto auto auto auto auto;
  column-gap: 30px;
  row-gap: 30px;
}
</style>
