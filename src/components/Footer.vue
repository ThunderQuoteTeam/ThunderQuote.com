<template>
    <div class="full-width">
        <svg id="wave-container">
            <clipPath id="wave" clipPathUnits="objectBoundingBox">
                <path class="st0" d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z"/>
            </clipPath>
        </svg>
        <footer>
            <div class="copyright m-2" v-if="!$root.isMobile">
                <div class="mountain-silhouette">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
                        <path stroke="null" id="svg_1" class="shape-fill" d="m4.5212 761.7c45.401-8.82 137.93 25.45 215.87-66.39 9.4991 16.546 30.428-12.532 32.037-2.0275 0.96496 6.3016 5.9119 10.2 23.643-6.635 8.4966 0.37055 28.816-8.6716 56.408-15.07 20.602-10.783 42.215-23.292 70.646-32.686 10.931-10.001 31.199-20.657 59.046-28.091 8.2707-7.1861 19.235-13.504 30.267-15.302 8.4114-12.207 21.919-17.771 31.296-17.527 51.136 7.7244 28.861-19.453 81.509 18.225-2.3527 16.178 17.071 37.574 26.504 55.951 13.785 10.417 36.779 42.78 40.656 40.268 8.3365 18.576 8.0127-4.7253 34.397 32.042 13.095 1.9386 40.527-5.284 48.491 4.7519 17.948-0.2084 34.843 3.3255 54.251 5.8216 1.7868-5.4758 29.188-16.314 88.652-48.824 2.4603 1.0865 59.307 3.7209 62.355 19.234 16.209-5.3235 39.754 6.5249 49.863 15.295 14.538-0.96857 23.954-3.1754 49.637 9.7379 51.986-13.305 37.238-1.6008 50.513 1.5629 37.345 58.335 47.7 48.6 52.285 41.983 30.24 18.447 48.766 20.915 48.936 25.957 37.022-13.584 52.601-5.2515 58.316-1.3945 28.226 4.0955 35.978-31.288 67.659-30.292 19.51-2.4182 25.146 17.641 44.676 32.104 8.0945-4.5282 28.662-17.38 47.827-41.936 21.919-10.401 24.182-31.538 33.279-34.024 8.525-1.8965 2.6765 9.4734 10.414 7.0237 4.2669-29.701 7.5271-26.476 16.205-17.727 10.184-14.976 26.358-21.148 51.396-53.946 33.687-6.9636 54.939-15.134 57.402-24.602 32.642 6.7948 47.333-5.1177 58.896-3.7929 16.684 1.9116 37.138 17.937 40.552 18.313 17.622 1.9406 10.87 7.6144 12.534 8.1607 12.014 3.9439 11.618 12.316 21.844 13.576 5.5451 13.64 15.177 17.187 24.508 14.392 5.3068 13.752 18.696 19.533 23.204 22.849 11.914 8.7663 14.083 26.688 41.284 25.466 28.306 28.205 32.782 15.831 94.876 63.197 2.5634-1.5826 8.0779 16.464 42.344 20.445 14.664 17.246 33.894 16.784 44.918 22.548 0 163.16 0.074 53.447 0.074 216.61-666.8 0-1333.2-0.107-2e3 -0.107 0-163.16 0.52936-131.97 0.52936-295.13z"/>
                    </svg>
                </div>
                <div class="d-flex justify-content-end my-2 social-media-icons text-bold mr-2">
                    <fa-icon @click="goTo(facebookLink)" class="mr-1 social-icon" :icon="['fab', 'facebook-square']" />
                    <fa-icon @click="goTo(twitterLink)" class="mx-1 social-icon" :icon="['fab', 'twitter-square']" />
                    <fa-icon @click="goTo(linkedinLink)" class="ml-1 social-icon" :icon="['fab', 'linkedin']" />
                </div>
                <small class="d-flex justify-content-end mr-2 mb-2">
                    <div>Copyright © 2016 - {{currentYear}} ThunderQuote</div>
                    <div class="mx-1">|</div>
                    <div class="pseudo-link" @click="goTo('https://procurement.thunderquote.com/terms/')">Terms & Conditions</div>
                    <div class="mx-1">|</div>
                    <div class="pseudo-link" @click="goTo('https://procurement.thunderquote.com/privacy/')">Privacy Policy</div>
                    <div class="mx-1">|</div>
                    <div class="pseudo-link" @click="goTo('https://procurement.thunderquote.com/security/')">Security</div>
                </small>
            </div>
            <div v-else >
                <div class="d-flex flex-column text-light mobile-footer pt-5 pb-3 px-1">
                    <div class="my-2 text-bold">Copyright © 2016 - {{currentYear}} ThunderQuote</div>
                    <div class="pseudo-link" @click="goTo('https://procurement.thunderquote.com/terms/')">Terms & Conditions</div>
                    <div class="pseudo-link" @click="goTo('https://procurement.thunderquote.com/privacy/')">Privacy Policy</div>
                    <div class="pseudo-link" @click="goTo('https://procurement.thunderquote.com/security/')">Security</div>
                    <div class="d-flex justify-content-center my-3 social-media-icons">
                        <fa-icon @click="goTo(facebookLink)" class="mr-1 social-icon" :icon="['fab', 'facebook-square']" />
                        <fa-icon @click="goTo(twitterLink)" class="ml-1 social-icon" :icon="['fab', 'twitter-square']" />
                        <fa-icon @click="goTo(linkedinLink)" class="mx-1 social-icon" :icon="['fab', 'linkedin']" />
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc)
dayjs.extend(timezone)

const currentYear = dayjs().tz("Asia/Singapore").format('YYYY');

const facebookLink = "https://www.facebook.com/thunderquote/";
const twitterLink = "https://twitter.com/Thunderquote_SG";
const linkedinLink = "https://www.linkedin.com/company/thunderquote/";

export default {
    name: 'Footer',
    methods: {
        goTo(url) {
            window.location.href = url;
        }
    },
    data() {
        return {
            currentYear,
            facebookLink,
            twitterLink,
            linkedinLink
        }
    }
}
</script>

<style lang="scss">
$hillcolour: #041a2a;

.copyright {
    color: #fff;
    font-weight: 100;
}

.pseudo-link {
    cursor: pointer;
}

footer {
    width: 100%;
}
.mobile-footer {
    background: $hillcolour;
    clip-path: url(#wave);
}

.social-media-icons {
    font-size: 2rem;
}

.social-icon {
    transition: all 0.3s;
    cursor: pointer;
}

.social-icon:hover {
    transform: scale(1.2);
}

.text-bold {
    font-weight: bold;
}

#wave-container {
    position: absolute;
}

.mountain-silhouette {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -2;
}

.mountain-silhouette svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 1000px;
    transform: rotateY(180deg);
}

.mountain-silhouette .shape-fill {
    fill: $hillcolour;
}
</style>