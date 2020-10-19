<template>
    <div class="height-100-percent">
        <div id="stars">
        </div>
        <div class="height-100-percent">
            <div class="hero hero-home" :class="[{'pt-5' : !$root.isMobile && !$root.isLarge}, {'pt-5' : $root.isMobile}, {'pt-7' : !$root.isMobile && $root.isLarge},]">
                <div class='top-content d-flex flex-column px-1'>
                    <div id="logo-container" class="px-2">
                        <div class="d-flex align-items-center justify-content-center flex-row">
                            <TQLogo id="tq-logo" class="mr-2" v-anime="a('tqFadeSlide')" />
                            <div>
                                <div class="d-flex align-items-center">
                                    <div 
                                        class="logo-text-thunder"
                                        v-anime="a('tqFadeSlideUp', 400)"
                                        >Thunder
                                    </div>
                                    <div 
                                    class="logo-text-quote mt-1"
                                    v-anime="a('tqFadeSlideUp', 600)"
                                    >Quote</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hero-text pt-3">
                        <h3 class="px-5 pb-2" v-anime="a('tqFadeSlideUp', 1500, 1500)">ThunderQuote is an all-in-one IT services provider, specialising in digital solutions for the non-profit & public sectors. 
                            <br> 
                            Our digital support services & tools will push your organisation's IT capabilities to the next level. We've worked with numerous non-profits, public sector organisations, and MNCs to digitally transform their company, from the inside out.</h3>

                            <b-row class="justify-content-center px-4 mt-2">
                                <b-card-group class="my-3 d-flex justify-content-center flex-wrap" deck>
                                    <AnimatedCard 
                                        cardId="ngo-card"
                                        :cardAnim="a('tqFadeSlideUp', 2000)"
                                        :cardTitleAnim="a('tqFadeSlideUp', 2500)"
                                        cardTitle="Non-Profit Digital Transformation"
                                        :cardBodyAnim="a('tqFadeSlideUp', 3000)"
                                        cardBodyText="Explore our free non-profit IT resource hub, including digitalisation handbooks, technology discounts, governance guides, grant information and more. Discover our IT support services for NPOs, such as system implementations, IT support & maintenance, and a range of freemium digital tools."
                                        cardButtonText="Visit ThunderQuote.org"
                                        cardLink="https://thunderquote.org"
                                    >
                                        <template v-slot:cardIcon>
                                            <NGOLogo/>
                                        </template>
                                    </AnimatedCard>

                                    <AnimatedCard 
                                        cardId="securemeet-card"
                                        :cardAnim="a('tqFadeSlideUp', 3500)"
                                        :cardTitleAnim="a('tqFadeSlideUp', 3500)"
                                        cardTitle="Secure eMeetings"
                                        :cardBodyAnim="a('tqFadeSlideUp', 4000)"
                                        cardBodyText="Secure your online meetings with ThunderQuote SecureMeet. Enabled by SingPass, our industry-leading identity verification and authorisation app will keep your e-meetings safe and confidential, with authenticated voting, nominations, quorum tracking, and more."
                                        cardButtonText="Visit SecureMeet"
                                        cardLink="https://securemeet.io"
                                    >
                                        <template v-slot:cardIcon>
                                            <SecureMeetLogo/>
                                        </template>
                                    </AnimatedCard>


                                    <AnimatedCard 
                                        cardId="securemeet-card"
                                        :cardAnim="a('tqFadeSlideUp', 4300)"
                                        :cardTitleAnim="a('tqFadeSlideUp', 4700)"
                                        cardTitle="eProcurement"
                                        :cardBodyAnim="a('tqFadeSlideUp', 5200)"
                                        cardBodyText="Digitalise your purchasing with ThunderQuote's free eProcurement system. Upload RFQs in over 45 categories, receive quotes from our vendor database, and keep track of your organisation's purchases, all within one platform."
                                        cardButtonText="Visit Our Procurement Portal"
                                        cardLink="https://procurement.thunderquote.com"
                                    >
                                        <template v-slot:cardIcon>
                                            <EProcurementLogo />
                                        </template>
                                    </AnimatedCard>

                                    
                                    
                                </b-card-group>
                            </b-row>

                        
                    </div>
                </div>
                <Footer/>  
            </div>
            
        </div> 
         
    </div>
</template>

<script>
import * as PIXI from 'pixi.js'
import StarChart from '@/js/starchart.js'
import TQLogo from '@/components/logos/TQLogo.vue';
import NGOLogo from '@/components/logos/NGOLogo.vue';
import SecureMeetLogo from '@/components/logos/SecureMeetLogo.vue';
import EProcurementLogo from '@/components/logos/EProcurementLogo.vue';
import anime from 'animejs';
import AnimatedCard from '@/components/AnimatedCard.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'MainPage',
    mounted() {
        window.starchart = new StarChart(document.getElementById('stars'), PIXI, 70, 70, 2);
        window.starchart.run();

        const delayArr = [{
            target: 'ngo',
            delay : 3000,
            duration: 1500
        }, { 
            target: 'securemeet',
            delay :3200,
            duration: 1200
        }, {
            target: 'e-procurement',
            delay : 5200, 
            duration: 2400
        }];

        delayArr.forEach(d => {
            this
            .$anime.timeline({ loop: false })
            .add({
                targets: `#${d.target}-logo path`,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: d.duration,
                delay: function(el, i) { return i * 250 + d.delay},
            })
        });
    },
    components: {
        TQLogo,
        NGOLogo,
        SecureMeetLogo,
        EProcurementLogo,
        AnimatedCard,
        Footer
    },
}
</script>

<style lang="scss" scoped>

#tq-logo {
   height: 50px;
   width: 50px;
}
#stars {
  position: fixed;
  animation: fadein 2s;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  /*background: linear-gradient(to top,#655aaf 0%,#516ce0 120%);*/
  background: linear-gradient(to bottom,#041727 0%,#062b3f 100%);
  z-index: -3;
}

.logo {
    height: 3.8rem;
}

.logo-text-thunder {
    font-family: OldSansBlack,Helvetica,sans-serif;
    color: $primary;
    font-size: 2.3rem;
}

.logo-text-quote {
    font-family: LiberationSansBold,Helvetica,sans-serif;
    color: #fff;
    font-size: 2.3rem;
}

.pt-7 {
    padding-top: 3.6rem;
}

.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
    flex: 1 0 auto;
}

.hero h2 {
  color: rgb(255, 255, 255);
  font-weight: 200;
  font-style: normal;
  font-size: 30px;
  position: relative;
}

.hero h3 {
  color: rgb(255, 255, 255);
  font-weight: 200;
  font-style: normal;
  margin-top: 15px;
  font-size: 22px;
  line-height: 150%;
  position: relative;
  z-index: 2;
}


.svg-logo{
    margin-top: 1rem;
    height: 80px;
    width: 80px;
    stroke: $primary;
    stroke-width: 4px;
}

.top-content {
    flex: 1 0 auto;
}
</style>