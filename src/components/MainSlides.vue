<template>
  <div class="height-inherit">
    <vueper-slides
    :bullets="false"
    fixed-height="100%"
    :arrows="false" 
    :touchable="false">
    <vueper-slide
        v-for="(slideIndex, i) in 4"
        :key="i"
        >
        <template v-slot:content>
            <div v-anime="a('fade')" v-if="slideIndex == 1" class="height-100-percent">
                <MainPage/>
            </div>
        </template>
    </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import MainPage from '@/views/MainPage.vue';

export default {
    name: 'MainSlides',
    components: {
        VueperSlides, 
        VueperSlide,
        MainPage,
    },
    
}
</script>

<style lang="scss">
</style>