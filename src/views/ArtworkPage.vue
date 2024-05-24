<template>
    <main>
      <div class="artwork-content content">
        <div class="artwork-container column">
          <img class="artwork" :src="artwork.imageUrl">
          <div class="artwork-created-date">Created: <span>{{ artwork.createdDate }}</span></div>
          <div class="artwork-info-container">
            <h1 class="artwork-title">{{ artwork.title }}</h1>
            <RouterLink class="artwork-author" :to="'/artist/' + author.firebaseId"><span>by</span> {{ author.username }}</RouterLink>
            <p class="artwork-description">{{ artwork.description }}</p>
            <p v-if="artwork.price" class="artwork-price-label">Price: <span>{{ artwork.price }}€</span></p>
          </div>
        </div>
        <div class="other-artwork-container">
          <h2>Other artwork by <b>{{ author.username }}</b>:</h2>
          <div class="other-artwork-slider row" id="image_slider">
            <div v-for="otherArtwork in otherArtworks" :key="otherArtwork.id" class="other-artwork-image-container" @click="refreshPage(otherArtwork.id)">
              <img :src="otherArtwork.imageUrl" class="other-artwork-image slider-element" draggable="false">
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
<script>
  import { db } from "@/firebase"
  import { collection, doc, query, where, limit, getDocs } from "firebase/firestore"
  import { getArtworkData, getOtherArtworkData } from "../data/art.js"
  import { getUserData } from "../data/user"

  export default {
    data() {
        return {
            artworkId: this.$route.params.id,
            artwork: {},
            otherArtworks: [],
            author: "",

            imageShouldClick: true
        };
    },
    mounted() {
      getArtworkData(this.artworkId).then((artwork) => {
        this.artwork = artwork
        getUserData(artwork.authorId).then((data) => {
          this.author = data
        })
        getOtherArtworkData(this.artworkId, artwork.authorId).then((data) => {
          this.otherArtworks = data
        })
      })
      
      const track = document.getElementById("image_slider");

      const trackElements = document.getElementsByClassName("slider-element")

      let trackContainerWidth = track.offsetWidth
      window.onresize = function(event) {
        trackContainerWidth = track.offsetWidth;
      }

      let isDragging = false
      let startPositionX = 0
      let endTranslatePercentage = 0
      let translatePercentage = 0

      const handleImageDragCursorDown = e => {
        document.getSelection().removeAllRanges()
        isDragging = true
        startPositionX = e.pageX - track.offsetLeft
      }
      const handleImageDragCursorUp = e => {
        isDragging = false
        endTranslatePercentage = translatePercentage
      }
      const handleImageDragCursorMove = e => {
        if (!isDragging) return

        const mouseX = e.pageX - track.offsetLeft
        const slideDistance = mouseX - startPositionX
        if (slideDistance < -5 || slideDistance > 5) this.imageShouldClick = false

        translatePercentage = slideDistance / trackContainerWidth * 100 + endTranslatePercentage
        if (translatePercentage < -100)
          translatePercentage = -100
        else if (translatePercentage > 0)
          translatePercentage = 0

        track.style.transform = `translate(${translatePercentage}%, 0)`
      }
      const handleImageDragCursorLeave = e => {
        isDragging = false
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
      refreshPage(id) {
        if (this.imageShouldClick) {
          this.$router.push({path: `/art/${id}`}).then(() => {
            window.location.reload()
          })
        }
        else this.imageShouldClick = true
        
      }
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';

  .artwork-content {
    background-color: black;
    overflow: hidden;
    position: relative;
  }
  .artwork-container {
    max-width: 600px;
    margin: auto;
  }
  .artwork {
    max-height: 600px;
    object-fit: contain;
  }
  .artwork-created-date {
    margin-left: auto;
    padding: 10px 0;
    color: #cecece;

    span {
      color: white;
      font-weight: 500;
    }
  }
  .artwork-info-container {
    padding: 0 20px;
  }
  .artwork-title {
    font-weight: 500;
  }
  .artwork-author {
    font-weight: 600;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
  .artwork-author > span {
    color: #cecece;
    font-size: 15px;
  }
  .artwork-description {
    margin-top: 20px;
    color: #cecece;
    font-size: 16px;
  }
  .artwork-price-label {
    font-size: 18px;
    margin-top: 10px;
    font-weight: 300;

    span {
      color: #cfa4ca;
      font-size: 22px;
      font-weight: 500;
    }
  }
  .other-artwork-container {
    margin: auto;
    margin-top: 100px;
    margin-bottom: 40px;
    overflow: hidden;
  }
  .other-artwork-container h2 {
    font-size: 32px;
    font-weight: 300;
  }
  .other-artwork-slider {
    justify-content: flex-start;
    margin-top: 20px;
  }
  .other-artwork-image-container {
    margin-right: 20px;
    cursor: pointer;
    transition: 0.2s;
  }
  .other-artwork-image-container:hover {
    filter: brightness(0.4);
  }
  .other-artwork-image {
    max-height: 320px;
  }

  @media (max-width: $responsive-breakpoint-small) {
    .artwork {
      max-height: 400px;
    }
    .artwork-info-container {
      padding: 0;
    }
    .other-artwork-container {
      margin-top: 40px;

      h2 {
        font-size: 24px;
      }
    }
    .other-artwork-image {
      height: auto;
    }
    .other-artwork-image {
      max-height: 200px;
    }
  }
</style>