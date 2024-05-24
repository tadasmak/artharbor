<template>
    <main>
        <div class="article-content content-smallest">
            <img class="article-image" :src="article.imageUrl">
            <p class="article-subtitle">{{ article.subtitle }}</p>
            <hr>
            <h1>{{ article.title }}</h1>
            <p class="article-description">{{ article.description }}</p>
            <div v-for="paragraph in article.paragraphs">
                <h2>{{ paragraph.title }}</h2>
                <p>{{ paragraph.text }}</p>
            </div>
        </div>
    </main>
</template>

<script>
    import { db } from "@/firebase"
    import { collection, query, where, getDocs } from "firebase/firestore";

    export default {
        data() {
            return {
                articleId: this.$route.params.id,
                article: {}
            }
        }, 
        mounted() {
            this.getArticleData(this.articleId)
        },
        methods: {
            selectSortOption(value) {
                let options = document.getElementsByClassName("sort-section")[0].children
                for (let i = 0; i < options.length; i++) {
                    options[i].classList.remove("active")
                }
                document.getElementById(`sort_${value}`).classList.add("active")
            },
            async getArticleData(id) {
                // , orderBy(params["sort"], params["order"])
                const querySnapshot = await getDocs(query(collection(db, "news"), where("id", "==", parseInt(id))))
                // forEach is asynchronous, that's why it's necessary to use a for loop
                for (const newsDoc of querySnapshot.docs) {
                    let article = newsDoc.data()
                    const paragraphs = await this.getParagraphsData(newsDoc)
                    article.paragraphs = paragraphs
                    this.article = article
                }
            },
            async getParagraphsData(object) {
                let paragraphs = []
                const paragraphsQuerySnapshot = await getDocs(collection(object.ref, 'paragraphs'));
                paragraphsQuerySnapshot.forEach(paragraphDoc => {
                    paragraphs.push(paragraphDoc.data());
                });
                return paragraphs;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';

    .article-content {
        background-color: black;
    }
    .article-image {
        width: 100%;
    }
    .article-subtitle {
        text-align: end;
        color: #cecece;
        font-size: 14px;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 40px;
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 32px;
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    p {
        font-size: 20px;
        color: #cecece;
        line-height: 28px;
    }
    .article-description {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 40px;
    }

    @media (max-width: $responsive-breakpoint-small) {
        h1 {
            font-size: 28px;
        }
        h2 {
            font-size: 26px;
        }
        p {
            font-size: 18px;
        }
        .article-description {
            font-size: 20px;
        }
    }
</style>