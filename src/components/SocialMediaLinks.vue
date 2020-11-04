<template>
    <nav class="d-flex justify-content-center my-2 social-media-icons text-bold mr-2">
        <ol>
            <li><a :href="facebookLink"><fa-icon class="mr-1 social-icon" :icon="['fab', 'facebook-square']" /></a></li>
            <li><a :href="twitterLink"><fa-icon class="mx-1 social-icon" :icon="['fab', 'twitter-square']" /></a></li>
            <li><a :href="linkedinLink"><fa-icon class="ml-1 social-icon" :icon="['fab', 'linkedin']" /></a></li>
        </ol>
    </nav>
</template>

<script>
const facebookLink = "https://www.facebook.com/thunderquote/";
const twitterLink = "https://twitter.com/Thunderquote_SG";
const linkedinLink = "https://www.linkedin.com/company/thunderquote/";

export default {
    name: 'SocialMediaLinks',
    data() {
        return {
            facebookLink,
            twitterLink,
            linkedinLink
        }
    }
}
</script>

<style lang="scss">
.social-media-icons {
    font-size: 2rem;
    
    & ol {
        list-style-type: none;
        display: flex;
        margin-bottom: 0;
    }

    & a {
        color: #fff;
    }

    & a:hover {
        color: #fff;
    }
}

.social-icon {
    transition: all 0.3s;
    cursor: pointer;
}

.social-icon:hover {
    transform: scale(1.2);
}
</style>