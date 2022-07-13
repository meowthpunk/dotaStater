<template>
  <div class="matches">
    <div v-for="match, idx in matches" :key="idx" class="match">
      <match-template
        :heroId="match.heroInfo.id"
        :matchSettings="match.matchInfo.settings"
        :kda="match.heroInfo.statistic.kda"
        :isWin="match.matchInfo.isWin"
        :gameInfoShow="gameInfoShow"
        :itemsInfoShow="itemsInfoShow"
        :microStatsInfoShow="microStatsInfoShow"
      />
    </div>
    <div v-if="preloader" class="preloader">
      <div class="preloader-b">
        <div class="preloader-g-f"></div>
        <div class="preloader-w"></div>
        <div class="preloader-g-s"></div>

      </div>
    </div>
    <div v-if="errorText != ''">
      <p>{{errorText}}</p>
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
      preloader: false,
      errorText: "Enter ur dota id",
    }
  },
  watch:{
    account_id(){
      this.someAction()
    },
    heroIdSearch(){
      this.someAction()
    },
  },
  components: {
    matchTemplate,
  },
  name: 'DotaStater',
  props: {
    msg: String,
    account_id: String,
    gameInfoShow: Boolean,
    itemsInfoShow: Boolean,
    microStatsInfoShow: Boolean,
    heroIdSearch: Number,
  },
  async mounted(){
    // this.someAction()
  },
  methods:{
    async someAction(){
      this.matches = []
      this.preloader = true
      this.errorText = ''
      try {
        let x = await exportData(this.account_id, 5,this.heroIdSearch)
        this.preloader = false
        console.log(x)
        if (x.matches.length > 0) {
          this.matches = x.matches
        }
        else {
          this.errorText = 'Please enter correctly dota id'
          this.preloader = false
        }
      } catch(e){
        console.log("gavno")
        this.errorText = 'Please enter correctly dota id'
        this.preloader = false
      }
    },
  }
}
</script>
<style scoped>

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
  /* width: 1408px; */
}
.preloader{
  color: #fff;
}
.preloader-b{
  background-color: #424242;
  width: 1408px;
  height: 14px;
  border-radius: 14px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
}
.preloader-w{
  background-color: #fff;
  width: 50%;
  height: 14px;
  border-radius: 14px;
  animation: 2s infinite slidein-27275de7 cubic-bezier(0.35, 0.34, 0.5, 0.48);
}
.preloader-g-f{
  background-color: #424242;
  width: 25%;
  height: 14px;
  border-radius: 14px;
  animation: 2s infinite slidein-g-27275de7 cubic-bezier(0.4, 0.41, 0.6, 0.57);
}

@keyframes slidein {
  from {
    width: 0;
  }
  50% {
    width: 50%;
  }
  to {
    width: 0;
  }
}
@keyframes slidein-g {
  from {
    width: 0;
  }
  50% {
    width: 25%;
  }
  to {
    width: 100%;
  }
}
p{
  margin: 0;
  font-size: 20px;
  color: #fff;
}
</style>
