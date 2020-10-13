<template>
<div class="mb-2 card-pseudo-link animated-cards" :id="cardId" v-anime="cardAnim">
  <b-card 
        class="my-2"
        variant="primary"
        tag="article"
        style="max-width: 20rem;"
        @click="visitLink(cardLink)">
            <b-card-title>
                <div>
                    <slot name="cardIcon">
                    </slot>
                    <div class="card-titles" v-anime="cardTitleAnim">{{cardTitle}}</div>
                </div>
            </b-card-title>
            <div v-anime="cardBodyAnim">
                <b-card-text class="text-primary">
                    {{cardBodyText}}
                </b-card-text>

                <b-button class="my-2" :href="cardLink" variant="primary">{{cardButtonText}}</b-button>
            </div>
                
    </b-card>
</div>
</template>

<script>
export default {
    name: 'AnimatedCard',
    props: {
        cardAnim: Object,
        cardId: String,
        cardTitleAnim: Object,
        cardTitle: String,
        cardBodyAnim: Object,
        cardBodyText: String,
        cardLink: String,
        cardButtonText: String
    },
    methods: {
        visitLink(url){
            window.location.href = url;
        }
    }
}
</script>

<style lang="scss">
.animated-cards {
    z-index: 1;
}

.card-titles {
    color: $primary;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    font-weight: 600;
}

article .card-body .card-text {
    min-height: 6rem;
    font-weight: 600;
}

.card-pseudo-link article{
    transition: all 0.3s;
    cursor: pointer;
    border-radius: 15px;
}

.card-pseudo-link article:hover {
    transform: scale(1.03);
}



</style>