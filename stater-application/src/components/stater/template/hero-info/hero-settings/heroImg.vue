<template>
  <div class="match-img">
    <img :src="img" alt="">
    <!-- {{this.heroId}} -->
  </div>
</template>

<script>
import heroes from '../../../based-arrays/heroes.js'

export default {
  data(){
    return{
      img: null,
    }
  },
  name: 'HeroImg',
  props: {
    heroId: Number,
  },
  mounted() {
    this.img = heroes(this.heroId).urlPath
    
  },
  watch:{
    heroId(){
      this.setImg()
    },
  },
  methods:{
    setImg(){
      this.img = heroes(this.heroId).urlPath
    }
  },
}
</script>

<style>
.match-img img{
  width: 256px;
  height: 144px
}
.match-img {
  height: 144px
}
</style>
