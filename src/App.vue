<template>
  <div id="app" class="height-inherit">
    <MainSlides/>
  </div>
</template>

<script>
import MainSlides from '@/components/MainSlides.vue';

export default {
  name: 'App',
  components: {
    MainSlides
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';

* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: Lato;
}

.height-inherit {
  height: inherit;
}

body {
  height: 100vh;
}
.height-100-vh {
    height: 100vh;
}

.height-100-percent {
    height: 100%;
}

.height-width-100-percent {
    height: 100%;
    width: 100%;
}

.full-width {
  width: 100%;
}
</style>
