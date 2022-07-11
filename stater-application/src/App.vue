<template>
  <div>
    <div>
      <input type="checkbox" name="val">
      <label for="val"> Game Info</label>
    </div>
    <div>

    </div>
  </div>
  <div>
    <div>
      <div>
        <p>Lobby Type</p>
      </div>
    </div>
    <div>
      <div>
        <dota-stater msg = "DotaStater"/>
      </div>
      <div>
        <div>
          <p>http;./82014?sadl;askd;129фывфывфывфывфыв12312а12а1221а124021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DotaStater from './components/stater/DotaStater.vue'


export default {
  name: 'App',
  components: {
    DotaStater,
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
