<template lang="html">
  <div class="match-name">
    <p>{{this.name}}</p>
  </div>
</template>

<script>
import heroes from '../../../based-arrays/heroes.js'

export default {
  data(){
    return{
      name: null,
    }
  },

  name: 'heroName',
  props: {
    heroId: Number,
  },
  mounted() {
    this.name = heroes(this.heroId).name

  },
  watch:{
    heroId(){
      this.setName()
    }
  },
  methods:{
    setName(){
      this.name = heroes(this.heroId).name
      this.name = heroes(this.heroId).name
    }
  },
}
</script>

<style lang="css" scoped>
.match-name{
  background-color: #2a2a2a;
  color: #fff;
  padding: 14px;
  font-size: 22px;
}
.match-name p{
  margin: 0;
}
</style>
