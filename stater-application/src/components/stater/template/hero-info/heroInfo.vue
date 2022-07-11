<template lang="html">
  <hero-img :heroId="this.heroId"/>
  <hero-name :heroId="this.heroId"/>
</template>

<script>
import HeroImg from './hero-settings/heroImg.vue'
import HeroName from './hero-settings/heroName.vue'
export default {
  components: {
    HeroName,
    HeroImg,
  },
  name: "heroInfo",
  props:{
    heroId: Number,
  },
}
</script>

<style lang="css" scoped>
</style>
