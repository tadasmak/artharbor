<template>
    <main>
        <FrontHeader :pageTitle="pageTitle" :pageDescription="pageDescription"/>
        <div class="news-content content-smaller">
            <div class="filter-container row">
                <div class="filter-section">
                    <label class="filter-label">Filter by:</label>
                    <select class="filter-selection">
                        <option class="filter-option">NONE</option>
                        <option class="filter-option">Tutorials</option>
                        <option class="filter-option">Technology</option>
                    </select>
                </div>
                <div class="sort-section">
                    <span id="sort_relevant" class="sort-option" @click="selectSortOption('relevant')">MOST RELEVANT</span>
                    <span>|</span>
                    <span id="sort_newest" class="sort-option active" @click="selectSortOption('newest')">NEWEST</span>
                </div>
            </div>
            <div class="news-section">
                <RouterLink v-for="article in news" :to="`/news/${article.id}`">
                    <div class="news-article row">
                        <img :src="article.imageUrl" class="news-image">
                        <div class="news-text-container">
                            <h2 class="news-title">{{ article.title }}</h2>
                            <p class="news-short">{{ article.description }}</p>
                            <div class="news-author">Published by: <span>{{ article.author }}</span></div>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<script>
    import { db } from '@/firebase';
    import { collection, query, orderBy, getDocs } from "firebase/firestore";

    import FrontHeader from "../components/FrontHeader.vue";
    export default {
        components: {
            FrontHeader
        },
        data() {
            return {
                pageTitle: "Art Chronicles",
                pageDescription: "Latest updates on art trends, exhibitions, and artists",
                news: []
            }
        },
        mounted() {
            let sort = this.$route.query.sort || "newest" 

            this.getArticlesData(sort)
            this.activateSortOptionElement(sort)
        },
        methods: {
            selectSortOption(value) {
                this.activateSortOptionElement(value)
                this.$router.push({query: {sort: value, order: "desc"}})

                this.getArticlesData(value)
            },
            async getArticlesData(sort) {
                this.news = []

                let params = {}
                if (sort == "newest") {
                    params["sort"] = "createdTimestamp"
                    params["order"] = "desc"
                }
                else if (sort == "relevant") {
                    params["sort"] = "views"
                    params["order"] = "desc"
                }

                const querySnapshot = await getDocs(query(collection(db, "news"), orderBy(params["sort"], params["order"])))
                querySnapshot.forEach((newsDoc) => {
                    let article = newsDoc.data()
                    let paragraphs = this.getParagraphsData(newsDoc)
                    article.paragraphs = paragraphs
                    this.news.push(article)
                });
            },
            async getParagraphsData(newsDoc) {
                let paragraphs = []
                const paragraphsQuerySnapshot = await getDocs(collection(newsDoc.ref, 'paragraphs'));
                paragraphsQuerySnapshot.forEach(paragraphDoc => {
                    paragraphs.push(paragraphDoc.data());
                });
                return paragraphs;
            },
            activateSortOptionElement(value) {
                let options = document.getElementsByClassName("sort-section")[0].children
                for (let i = 0; i < options.length; i++) {
                    options[i].classList.remove("active")
                }
                document.getElementById(`sort_${value}`).classList.add("active")
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';

    .news-content {
        background-color: black;
    }
    .news-article {
        margin-bottom: 40px;
        cursor: pointer;
    }
    .news-image {
        min-width: 40%;
        height: 320px;
        object-fit: cover;
        margin-right: auto;
    }
    .news-text-container {
        padding: 10px 20px;
    }
    .news-title {
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        margin-bottom: 20px;
    }
    .news-short {
        font-size: 18px;
        color: #cecece;
    }
    .news-author {
        color: #cecece;
        font-size: 16px;
        margin-top: 20px;
        text-align: end;
    }
    .news-author span {
        color: white;
        font-size: 18px;
        font-weight: 500;
    }


    @media (max-width: $responsive-breakpoint-small) {
        .news-article {
            flex-direction: column;
            margin-bottom: 80px;
        }
        .news-image {
            width: 100%;
            height: auto;
        }
        .news-text-container {
            padding: 0;
        }
        .news-title {
            font-size: 24px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .news-short {
            font-size: 16px;
        }
        .news-author {
            font-size: 12px;
        }
        .news-author span {
            font-size: 15px;
        }
    }
</style>