<template>
    <nav :class="$root.isMobile ? 'mobile-footer-nav' : 'footer-nav'">
        <ol>
            <li class="crumb"><a href="https://thunderquote.org/contact/">Contact</a></li>
            <li class="crumb"><a href="https://thunderquote.org/careers">Careers</a></li>
            <li class="crumb"><a href="https://procurement.thunderquote.com/terms/">Terms & Conditions</a></li>
            <li class="crumb"><a href="https://procurement.thunderquote.com/privacy/">Privacy Policy</a></li>
            <li class="crumb"><a href="https://procurement.thunderquote.com/security/">Security</a></li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'FooterNavigationLinks',
}
</script>

<style lang="scss">
.footer-nav {
    color: #fff;

    & ol {
        list-style-type: none;
        padding-left: 0;
    }

    & .crumb {
        display: inline-block;
    }

    & a {
        color: #fff;
    }

    & a:hover {
        text-decoration: none;
        color: #fff
    }

    & .crumb:not(:last-child) a::after {
        display: inline-block;
        content: '|';
        color: #fff;
        font-weight: bold;
        padding: 0 3px;
    }
}

.mobile-footer-nav {
    & a {
        color: #fff;
    }

    & a:hover {
        text-decoration: none;
        color: #fff;
    }
}
</style>