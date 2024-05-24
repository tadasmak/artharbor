<template>
    <div class="front-header-content column">
      <div class="front-header-text">
        <h1 class="front-header-title">{{ pageTitle }}</h1>
        <h4 class="front-header-subtitle">{{ pageDescription }}</h4>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            pageTitle: {
                type: String,
                required: true
            },
            pageDescription: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';
    
    .front-header-content {
        background-image: url("/images/home/home.jpg");
        background-size: cover;
        background-position: center;
        height: min(100vh, 600px);
        padding: 0 10vw;
        justify-content: center;
        align-items: center;
    }
    .front-header-text {
        text-align: center;
    }
    .front-header-title {
        font-size: 64px;
    }
    .front-header-subtitle {
        font-size: 32px;
        font-weight: 300;
        letter-spacing: 1px;
    }

    @media (max-width: $responsive-breakpoint-small) {
        .front-header-title {
            font-size: 42px
        }
        .front-header-subtitle {
            font-size: 22px;
        }
    }
</style>