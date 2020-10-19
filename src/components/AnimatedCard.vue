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
                <b-card-text>
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
    min-height: 3.5rem;
    color: $primary;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    font-weight: 600;
}

article .card-body .card-text {
    min-height: 12rem;
    font-weight: 600;
}

.card-pseudo-link article{
    transition: all 0.3s linear;
    cursor: pointer;
    border-radius: 15px;
}

.card-pseudo-link:hover article{ 
     transform: scale(1.03);
}


.animated-cards {
    & svg {
        path {
            stroke: $primary;
        }

        g {
            fill: rgba(255,255,255,0);
        }
    }

    
    & .card-text {
        color: $primary;
    }
}

.animated-cards:hover {
    & .card-titles {
        font-family: Lato-Regular;
    }

    & svg {
        g {
            fill: $primary;
        }
    }
}

</style>