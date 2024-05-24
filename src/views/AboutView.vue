<template>
    <main>
        <FrontHeader :pageTitle="pageTitle" :pageDescription="pageDescription"/>
        <div class="about-us-content content-smaller">
            <p class="about-us-paragraph">Welcome to Mosaic Harbor, a dynamic digital haven where the rich tapestry of creativity is woven by artists from every corner of the world. At Mosaic Harbor, we believe that art knows no bounds, and the power of creative expression transcends cultural, geographic, and artistic barriers.</p>
            <div class="row about-us-row-section">
                <img id="about_us_image" class="about-us-image" src="/images/about-us/1.jpg">
                <div class="about-us-text-container">
                    <h2 class="about-us-title" id="about_us_image_title">Our Vision: Uniting the Global Canvas</h2>
                    <p id="about_us_image_description">Mosaic Harbor was born from the vision of creating a space where artists of all backgrounds and skill levels could converge, collaborate, and showcase their unique voices. We envision a world where the global canvas is a mosaic of diverse perspectives, where every stroke contributes to a rich narrative of shared humanity.</p>
                </div>
            </div>
            <div class="row image-row">
                <div v-for="i in 5" class="image-placeholder" :style="{backgroundImage: 'url(' + `./images/about-us/${i}.jpg` + ')'}" :class="i == 1 ? 'active' : ''" @click="aboutUsImageSelection(i)"></div>
            </div>
            <h2 class="about-us-title">Join Us on the Journey</h2>
            <p class="about-us-paragraph">Whether you're here to explore, share, or simply immerse yourself in the world of art, Mosaic Harbor invites you to join us on this exhilarating journey. Every click, every upload, and every connection made contributes to the vibrant mosaic we're creating together. Welcome to Mosaic Harbor, where your artistic odyssey begins and where every artist finds a home.</p>
        </div>
    </main>
</template>

<script>
  import FrontHeader from "/src/components/FrontHeader.vue";
  export default {
      components: {
          FrontHeader
      },
      data() {
          return {
              pageTitle: "About Us",
              pageDescription: "A Global Tapestry of Artistic Expression",
              aboutUsImageData: [
                {title: "Our Vision: Uniting the Global Canvas", description: "Mosaic Harbor was born from the vision of creating a space where artists of all backgrounds and skill levels could converge, collaborate, and showcase their unique voices. We envision a world where the global canvas is a mosaic of diverse perspectives, where every stroke contributes to a rich narrative of shared humanity.", imageUrl: "./images/about-us/1.jpg"},
                {title: "A Digital Atelier: Nurturing Artistic Journeys", description: "Think of Mosaic Harbor as your virtual atelier, a space where you can explore, experiment, and evolve. Whether you're a seasoned artist seeking a new audience or an emerging talent looking for guidance, our platform is designed to nurture your artistic journey. Here, creativity is not just encouraged; it's celebrated.", imageUrl: "./images/about-us/2.jpg"},
                {title: "Community-Centric: Where Artists Thrive Together", description: "At the heart of Mosaic Harbor is a vibrant and supportive community. Connect with fellow artists, exchange ideas, and collaborate on projects that transcend borders. Our platform is more than a gallery; it's a dynamic ecosystem where artists inspire and uplift each other, fostering a sense of belonging in the ever-expanding realm of creativity.", imageUrl: "./images/about-us/3.jpg"},
                {title: "Inclusivity and Diversity: Every Artist, Every Style", description: "We pride ourselves on being an inclusive space that embraces the richness of artistic diversity. Whether you wield a brush, capture moments through a lens, or express yourself through digital mediums, Mosaic Harbor is a stage for every artist. Our commitment to diversity ensures that every style, genre, and form of expression finds its place in our ever-growing gallery.", imageUrl: "./images/about-us/4.jpg"},
                {title: "Empowering the Artist: Tools for Success", description: "We understand the challenges artists face, and that's why Mosaic Harbor goes beyond being a showcase; it's a toolkit for success. Access resources, participate in workshops, and engage with experts to elevate your craft. Our platform empowers artists to not only share their work but to thrive in their artistic endeavors.", imageUrl: "./images/about-us/5.jpg"},
            ]
          }
      },
      methods: {
        aboutUsImageSelection(value) {
            let elements = document.getElementsByClassName("image-placeholder");
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("active");
            }
            elements[value - 1].classList.add("active");
            document.getElementById("about_us_image").src = this.aboutUsImageData[value - 1].imageUrl
            document.getElementById("about_us_image_title").innerHTML = this.aboutUsImageData[value - 1].title;
            document.getElementById("about_us_image_description").innerHTML = this.aboutUsImageData[value - 1].description;
            
        }
      }
  }
</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';

    .about-us-content {
        background-color: black;
    }
    .about-us-title {
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        margin-bottom: 20px;
    }
    .about-us-paragraph {
        font-size: 20px;
        margin-bottom: 40px;
    }
    .about-us-image {
        width: 280px;
        object-fit: contain;
        margin-right: auto;
    }
    .about-us-text-container {
        padding: 10px 20px;
    }
    .about-us-text-container p {
        font-size: 18px;
    }
    .image-row {
        justify-content: flex-start;
        align-items: center;
        margin: 40px 0;
        height: 160px;
    }
    .image-placeholder {
        width: 120px;
        height: 120px;
        background-size: 120px auto;
        background-position: center;
        filter: grayscale(100);

        transition: 0.5s;
        cursor: pointer;
        margin-right: 10px;
    }
    .image-placeholder.active {
        width: 160px;
        height: 160px;
        background-size: 160px auto;
        filter: grayscale(0);
    }
    .image-placeholder:hover {
        filter: grayscale(0);
    }


    @media (max-width: $responsive-breakpoint-small) {
        .about-us-paragraph {
            font-size: 18px;
        }
        .about-us-title {
            font-size: 28px;
        }
        .about-us-row-section {
            flex-direction: column;
            scroll-margin-top: 100px;
        }
        .about-us-text-container {
            padding: 20px 0;
            font-size: 16px;
        }
    }
</style>