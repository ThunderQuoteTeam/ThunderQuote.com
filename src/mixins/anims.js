//Animations should go here;

import Vue from 'vue'
import VueAnime from 'vue-animejs';

Vue.use(VueAnime)

const delay = 1000;

const tqFade = {
    opacity: ['0%', '100%'],
    delay,
}

const tqFadeSlide = {
    ...tqFade,
    translateX: ['10px','0px']
}

const tqFadeSlideUp = {
    ...tqFade,
    translateY: ['10px','0px']
}

Vue.mixin({
    data(){
        return {
            tqFade,
            tqFadeSlide,
            tqFadeSlideUp,
        }
    },
    methods: {
        a(name, moreDelay = 0, duration = 0) {
            moreDelay = !moreDelay ? delay : delay + moreDelay;
            
            const obj = {
                ...this[name]
            };

            duration ? obj.duration = duration : null;
            obj.delay = moreDelay
            return obj;
        }
    }
});