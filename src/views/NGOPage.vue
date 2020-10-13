<template>
    <div class="ngo-container" :style="{backgroundImage: `url(${ngoBg})`}">
    </div>
</template>

<script>
//Maybe one page is sufficient
export default {
    name: 'NGOPage',
    data() {
        return {
            ngoBg: null
        }
    },
}
</script>

<style lang="scss" scoped>
.ngo-container {
  background: no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>