<template>
  <div class="menu">
    <div class="left-menu">
      <div class="check-list">
        <div class="checker" @click="gameInfoShow = !gameInfoShow" :class="{checked: gameInfoShow}">
          <i class="uil uil-info-circle"></i>
        </div>
        <!-- <div class="checker" @click="itemsInfoShow = !itemsInfoShow" :class="{checked: itemsInfoShow}">
        </div>
        <div class="checker" @click="microStatsInfoShow = !microStatsInfoShow" :class="{checked: microStatsInfoShow}">
        </div> -->
      </div>
      <div>

      </div>
    </div>
    <div class="right-menu">
      <div class="r-m-items">
        <div class="item">
          <input
            placeholder="ur dota id"
            class="item-inp"
            v-model="lobbyNum"
          >
        </div>
        <div class="sel-items">
          <select-box class="mr" @selecterHero="selecterHero" @sellecterNull="sellecterNull"/>
          <!-- <select-box class="mr"/>
          <select-box class="mr"/> -->
        </div>
      </div>
      <div class="r-m-bottom">
        <div class="stater-cont" v-if="setter">
          <dota-stater
            msg = "DotaStater"
            :account_id= "lobbyNum"
            :gameInfoShow="gameInfoShow"
            :itemsInfoShow="itemsInfoShow"
            :microStatsInfoShow="microStatsInfoShow"
            :heroIdSearch="heroIdSearch"
          />
        </div>
        <!-- <div class="href">
          <div>
            <p>https://www.dotabuff.com/players/1034052857</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import DotaStater from './stater/DotaStater.vue'
import selectBox from './selectBox.vue'


export default {
  data(){
    return {
      lobbyNum: "",
      setter: true,
      gameInfoShow: true,
      itemsInfoShow: true,
      microStatsInfoShow: true,
      heroIdSearch: 404,
    }
  },
  name: 'settingsMenu',
  components: {
    DotaStater,
    selectBox,
  },
  // computed:{
  //   reloader(){
  //     this.reload()
  //     return this.lobbyNum
  //   }
  // },
  watch:{
    lobbyNum(){
      this.reload()
    }
  },
  methods:{
    reload(){
      this.setter = false
      this.setter = true
    },
    selecterHero(id){
      this.heroIdSearch = id
    },
    sellecterNull(){
      this.heroIdSearch = 404
    },
  },
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.stater-cont{
  width: 1500px;
  /* height: 360px; */
  background-color: #1f1f1f;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;
  padding: 46px 46px;
  box-sizing: border-box;
}
.left-menu{
  width: 80px;
  background-color: #1f1f1f;
  height: 100%;
}
.right-menu{
  flex-grow: 1px;
  width: 100%;
  background-color: #323232;
  height: 100%;
}
.menu{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  height: 100vh;
  font-family: Poppins;
}
.r-m-items{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  height: 100px;
  -ms-align-items: center;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  background-color: #242424;
  justify-content: space-between;
}
.r-m-bottom{
  margin-top: 60px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  flex-grow: 1;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  /* height: 100%; */
  padding: 0 60px;
  box-sizing: border-box;
}
.item + .item{
  margin-left: 20px;
}
.item-inp{
  font-size: 16px;
  font-family: Poppins;
  border: none;
  outline: none;
  background-color: #181818;
  color: #fff;
  padding: 10px 20px;
  width: 500px;
  border-radius: 10px;
  box-sizing: border-box;
  height: 50px;
}
.sel{
  background-color: #181818;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 20px;
  height: 50px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  border-radius: 10px;
  color: #fff;
  width: 200px;
}
p{
  margin: 0;
}
.href{
  width: 100%;
  box-sizing: border-box;
  font-size: 30px;
  color: #fff;
  margin-top: 30px;
}
.href div{
  background-color: #1f1f1f;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 20px;
}
.sel-items{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
}
.checker{
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #424242;
}
.check-list{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-align-items: center;
  align-items: center;
  margin-top: 10px;
}
.checked{
  color: #fff;
}
.mr + .mr {
  margin-left: 24px;
}
</style>
