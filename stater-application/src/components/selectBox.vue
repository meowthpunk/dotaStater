<template>
  <div class="wrapper" :class="{active: active}" @mouseleave='active = false'>
    <div class="select-btn" @click="submitData">
      <span class="sel-n" v-if="selectedHero.id == 404">Choose Hero</span>
      <span class="sel" v-else>{{namerDrop}}<div @click.stop="selectNull"><i class="uil uil-times"></i></div></span>
      <i class="uil uil-angle-down"></i>
    </div>
    <div class="marger"></div>
    <div class="content">

      <div class="search">
        <i class="uil uil-search"></i>
        <input type="text" placeholder="Search" v-model="searcher" ref="myinput">
      </div>
      <ul class="options">
        <li v-for="hero in searchNames" :key="hero.id" @click="selectHero(hero)">{{hero.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {sortedHeroList} from "./stater/based-arrays/heroes.js"
export default {
  data(){
    return{
      heroes: sortedHeroList(),
      active: false,
      searcher: '',
      selectedHero: {name: '', id: 404},
    }
  },
  name: 'selectBox',
  components: {
  },
  computed:{
    searchNames(){
      return this.heroes.filter(hero => hero.name.toLowerCase().indexOf(this.searcher.toLowerCase()) === 0)
    },
    namerDrop(){
      // console.log(this.selectedHero)
      return this.selectedHero.name
    },
  },
  methods: {
    submitData() {
      const inp = this.$refs.myinput
      this.active = !this.active
      console.log(inp)
      inp.focus()
    },
    selectHero(hero){
      this.selectedHero = hero
      this.active = false
      this.$emit('selecterHero', hero.id)
    },
    selectNull(){
      this.selectedHero = {name: '', id: 404}
      this.$emit('sellecterNull')
    }
  },
}
</script>
<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap'); */
.marger{
  height: 10px;
}
.cont{
  background-color: #cf4cff;
  width: 100vw;
  height: 100vh;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
}
ul{
  margin: 0;
  padding: 0;

}
.select-btn{
  border-radius: 7px;
  background-color: #181818;
  color: #ffffff;
  padding: 0 14px 0 18px;
  box-sizing: border-box;
  font-size: 16px;
  justify-content: space-between;

  height: 50px;
}
.options li, .select-btn{
  cursor: pointer;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
}
.select-btn i{
  font-size: 26px;
  /* color: red; */
  transition: transform 0.3s linear;
}
.wrapper{
  width: 250px;
}
.content{
  background-color: #181818;
  display: none;
  padding: 20px;
  box-sizing:border-box;
  border-radius: 7px;
  /* margin-top: 10px; */
  position: absolute;
  width: 250px;
}
.marger{
  display: none;
}
.wrapper.active .content,.marger{
  display: block;
}
.wrapper.active .select-btn i{
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
}
.content .search{
  position: relative;
}
.search input{
  height: 40px;
  width: 100%;
  font-size: 16px;
  padding: 0 15px 0 43px;
  box-sizing:border-box;
  outline: none;
  border: 1px solid #b3b3b3;
  border: none;
  border-radius: 7px;
  background-color: #242424;
  color: #fff;
}
.search i{
  color: #fff;
  position: absolute;
  left: 15px;
  line-height: 40px;
}
.content .options{
  margin-top: 10px;
  max-height: 240px;
  overflow-y: auto;
}
.options li{
  height: 40px;
  border-radius: 5px;
  padding: 0 13px;
  font-size: 16px;
  color: #fff;
  margin-right: 6px;
}

.options li:hover{
  background-color: #242424;
}
.options::-webkit-scrollbar{
  width: 7px;
}
.options::-webkit-scrollbar-track{
  background-color: #242424;
  border-radius:40px;
}
.options::-webkit-scrollbar-thumb{
  background-color: #fff;
  border-radius:40px;
}
.sel i{
  font-size: 20px;
  transition: none;
  color: #000;
}
.sel{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
}
.sel div{
  background-color: #fff;
  width: 26px;
  height: 26px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
}
.sel-n{
  color: #616161;
}
</style>
