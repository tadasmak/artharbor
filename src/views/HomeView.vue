<template>
  <main>
    <div class="home-content column">
      <div class="home-header">
        <h1 class="home-title">Art Harbor</h1>
        <h4 class="home-subtitle">A welcoming place for art enthusiasts to bloom</h4>
      </div>
    </div>
    <div class="content themes-section" id="themes_section">
      <h2 class="section-title">Explore art themes</h2>
      <h5 class="section-subtitle">Delve into the world of creativity and expression as you explore our diverse collection of art themes. From the tranquility of nature photography to the classic art, discover the stories, emotions, and inspirations behind each unique theme brought to life by talented artists.</h5>
      <div class="image-slider row" id="image_slider">
        <div v-for="theme in themes" :key="theme.id" class="themes-section-image-container slider-element column" :style="{backgroundImage: `url(${theme.imageUrl})`}" draggable="false">
          <div class="themes-section-darken-overlay"></div>
          <div class="themes-section-text-container">
            <div class="themes-section-title">{{ theme.title }}</div>
            <div class="themes-section-description">{{ theme.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="black-area"></div>
    <div class="parallax-image" :style="{backgroundPositionY: `${parallaxOffset}px`}"></div>
    <div class="content explore-section">
      <h2 class="section-title">Step into a world of creativity</h2>
      <h5 class="section-subtitle">Immerse yourself in our art exhibitions. From the vibrant strokes of color to the intricate details, experience the power of art to captivate, inspire, and transport you to new realms of imagination and emotion.</h5>
      <div class="artwork-grid">
        <div v-for="art in arts" :key="art.id">
          <img :src="art.imageUrl" class="artwork-grid-image">
        </div>
      </div>
      <div class="artwork-explore-overlay">
        <RouterLink to="/art"><div class="artwork-explore-button green-button">Explore</div></RouterLink>
      </div>
    </div>
  </main>
</template>

<script scoped>
  import { artData } from '../data/art.js'
  export default {
    name: "Home",
    data() {
      return {
        themes: [
          {id: 1, title: "Nature", description: "Embrace the beauty of the natural world through captivating landscapes, wildlife, and botanical wonders.", imageUrl: "./images/home/nature.jpg"},
          {id: 2, title: "Evenings", description: "Witness the world transformed as the sun sets and paints the sky with hues of twilight.", imageUrl: "./images/home/evenings.jpg"},
          {id: 3, title: "Architecture", description: "Experience the allure of architectural wonders. Delve into a captivating collection that highlights the delicate balance between human creativity and the serene beauty of nature.", imageUrl: "./images/home/architecture.jpg"},
        ],
        arts: artData.slice(0, 7),
        parallaxOffset: 0
      }
    }, 
    mounted() {
      window.addEventListener("scroll", this.parallaxEffect);
      
      const track = document.getElementById("image_slider");

      const trackElements = document.getElementsByClassName("slider-element");
      
      let isDragging = false;
      let startPositionX = 0;
      let endTranslatePercentage = 0;
      let translatePercentage = 0;

      let trackContainerWidth = track.offsetWidth;
      window.onresize = function(event) {
        trackContainerWidth = track.offsetWidth;
      }

      const handleImageDragCursorDown = e => {
        document.getSelection().removeAllRanges();
        isDragging = true;
        startPositionX = e.pageX - track.offsetLeft;
      }
      const handleImageDragCursorUp = e => {
        isDragging = false;
        endTranslatePercentage = translatePercentage
      }
      const handleImageDragCursorMove = e => {
        if (!isDragging) return;
        const mouseX = e.pageX - track.offsetLeft;
        const slideDistance = mouseX - startPositionX;
        
        translatePercentage = slideDistance / trackContainerWidth * 100 + endTranslatePercentage;
        // if (translatePercentage < -100) translatePercentage = -100;
        // if (translatePercentage < -100 * (trackElements.length - 1) / trackElements.length) translatePercentage = -100 * (trackElements.length - 1) / trackElements.length;
        // else if (translatePercentage > 0) translatePercentage = 0;

        track.style.transform = `translate(${translatePercentage}%, 0)`;
      }
      const handleImageDragCursorLeave = e => {
        isDragging = false;
        endTranslatePercentage = translatePercentage
      }

      track.addEventListener('mousedown', (e) => handleImageDragCursorDown(e))
      window.ontouchstart = e => handleImageDragCursorDown(e.touches[0]);

      track.addEventListener('mouseup', (e) => handleImageDragCursorUp(e))
      window.ontouchend = e => handleImageDragCursorUp(e.touches[0]);

      track.addEventListener('mousemove', (e) => handleImageDragCursorMove(e));
      window.ontouchmove = e => handleImageDragCursorMove(e.touches[0]);

      track.addEventListener('mouseleave', (e) => handleImageDragCursorLeave(e))
      window.ontouchcancel = e => handleImageDragCursorLeave(e.touches[0]);
      
    },
    methods: {
      parallaxEffect() {
        this.parallaxOffset = window.scrollY * 0.4;
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';

  .home-content {
    background-image: url("/images/home/home.jpg");
    background-size: cover;
    background-position: center;
    height: min(80vh, 1200px);
    padding: 0 10vw;
    justify-content: center;
    align-items: center;
  }
  .home-header {
    text-align: center;
  }
  .home-title {
    font-size: 64px;
  }
  .home-subtitle {
    font-size: 32px;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .themes-section {
    background-color: #F2E6F0;
    color: black;
    overflow: hidden;
  }
  .section-title {
    font-size: 42px;
    font-weight: 400;
  }
  .section-subtitle {
    margin-top: 20px;
    font-size: 20px;
    margin-bottom: 40px;
  }
  .image-slider {
    justify-content: flex-start;
    margin-bottom: 50px;
  }
  .themes-section-image-container {
    color: white;
    background-size: cover;
    background-position: center;
    height: 390px;
    width: 780px;
    margin-right: 20px;
    cursor: pointer;
  }
  .themes-section-darken-overlay {
    width: inherit;
    height: 100%;
    margin-bottom: -50%;
    background: rgba(0, 0, 0, 0.2);
  }
  .themes-section-text-container {
    margin-top: auto;
    z-index: 1;
    max-width: 500px;
    padding: 20px;
    user-select: none;
  }
  .themes-section-title {
    font-size: 32px;
    font-weight: 600;
  }
  .themes-section-description {
    font-size: 20px;
    font-weight: 400;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .black-area {
    height: 60px;
    background-color: black;
  }
  .parallax-image {
    background-image: url("/images/home/parallax.jpg");
    background-size: 200% auto;
    background-position-x: center;
    height: 320px;
    width: 100%;
    margin-right: auto;
  }
  .parallax-image::before {
    height: 200px;
    background-color: black;
  }
  .explore-section {
    background-color: black;
    padding-bottom: 40px;
  }
  .artwork-explore-overlay {
    box-shadow: inset 0px -180px 40px -10px black;   
    position: absolute;
    width: 100%;
    margin-top: -200px;
    padding: 80px 0;
    left: 0;
  }
  .artwork-explore-button {
    font-size: 22px;
    margin: auto;
    margin-top: auto;
    width: 160px;
    padding: 8px 0;
    border-radius: 36px;
  }

  @media (max-width: $responsive-breakpoint-small) {
    .home-title {
      font-size: 42px;
    }
    .home-subtitle {
      font-size: 22px;
    }
    .section-title {
      font-size: 32px;
    }
    .section-subtitle {
      font-size: 18px;
    }
    .themes-section-image-container {
      width: 300px;
      height: 200px;
    }
    .themes-section-text-container {
      padding: 12px;
    }
    .themes-section-title {
      font-size: 24px;
    }
    .themes-section-description {
      font-size: 16px;
    }
    .parallax-image {
      height: 180px;
    }
    .explore-section {
      padding-bottom: 0;
    }
    .artwork-explore-button {
      font-size: 16px;
      width: 120px;
    }
  }

</style>