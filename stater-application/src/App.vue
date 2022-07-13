<template>
  <settings-menu v-show="true"/>
  <select-box v-show="false"/>
  <!-- <select-box v-show="true"/>
  <select-box v-show="true"/> -->
</template>

<script>
import settingsMenu from './components/settingsMenu.vue'
import selectBox from './components/selectBox.vue'


export default {
  name: 'App',
  components: {
    settingsMenu,
    selectBox,
  },
  mounted(){
    let num = 20
    console.log(num.toString())
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  font-family: Poppins;
}
input{
  font-family: Poppins;
}
</style>
