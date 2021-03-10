import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAnime from 'vue-animejs';
import '@/mixins/anims.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('fa-icon', FontAwesomeIcon)

library.add(faTwitterSquare, faFacebookSquare, faLinkedin)

Vue.use(VueAnime)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const mobileWidthEnds = 768;
const largeWidthStarts = 1280;

const checkWidth = () => {
  const width = window.innerWidth
  || window.document.documentElement.clientWidth
  || window.document.body.clientWidth;
  return width;
}


const procurementDomain = 'https://procurement.thunderquote.com/';
const params = new URLSearchParams(window.location.search);

const post = params.get('p');

if (post) {
  window.location.href = `${procurementDomain}?p=${post}`;
  throw new Error('Redirecting...');
}



new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  created() {
    //window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize');
  },
  data() {
    return {
      isLarge: checkWidth() > largeWidthStarts,
      isMobile: checkWidth() <= mobileWidthEnds,
      primary: '#6060ab',
    }
  },
  methods: {
    resizeHandler(){
      this.isMobile = checkWidth() <= mobileWidthEnds;
      this.isLarge = checkWidth() > largeWidthStarts;
    }
  }
}).$mount('#app')
