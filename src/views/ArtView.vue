<template>
    <main>
        <FrontHeader :pageTitle="pageTitle" :pageDescription="pageDescription"/>
        <div class="art-content content">
            <div class="filter-container row">
                <div class="filter-section">
                    <label class="filter-label">Filter by:</label>
                    <select id="filter_selection" class="filter-selection" @change="selectFilterOption()">
                        <option class="filter-option" value="" selected>ALL</option>
                        <option id="filter_forsale" class="filter-option" value="price">For Sale</option>
                    </select>
                </div>
                <div class="sort-section">
                    <span id="sort_relevant" class="sort-option active" @click="selectSortOption('relevant')">MOST RELEVANT</span>
                    <span>|</span>
                    <span id="sort_price" class="sort-option" @click="selectSortOption('price')">PRICE</span>
                    <span>|</span>
                    <span id="sort_newest" class="sort-option" @click="selectSortOption('newest')">NEWEST</span>
                </div>
            </div>
            <div class="artwork-grid">
                <div v-for="art in arts" :key="art.id" class="artwork-grid-item">
                    <RouterLink :to="`/art/${art.id}`"><img :src="art.imageUrl" class="artwork-grid-image"></RouterLink>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { db } from '@/firebase';
    import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
    
    import FrontHeader from "/src/components/FrontHeader.vue";
    export default {
        components: {
            FrontHeader
        },
        data() {
            return {
                pageTitle: "Explore art",
                pageDescription: "Embark on a captivating journey",
                arts: []
            }
        },
        mounted() {
            let sort = this.$route.query.sort || "relevant"
            let filter = this.$route.query.filter

            this.getArtData(sort, filter)
            this.activateSortOptionElement(sort)
            this.activateFilterOptionElement(filter)
        },
        methods: {
            selectSortOption(value) {
                this.activateSortOptionElement(value)

                let order = "desc"
                if (value == "price") order = "asc"

                this.$router.push({query: {sort: value, order: order}})

                this.getArtData(value, "")
            },
            selectFilterOption() {
                let filter = document.getElementById("filter_selection").value

                if (filter) this.$router.push({query: {filter: filter}})
                else this.$router.push({query: ""})
            
                this.getArtData("", filter)
            },
            async getArtData(sort, filter) {
                this.arts = []

                let params = {}
                if (sort == "newest") {
                    params["sort"] = "createdTimestamp"
                    params["order"] = "desc"
                }
                else if (sort == "price") {
                    params["sort"] = "price"
                    params["order"] = "asc"
                }
                else {
                    params["sort"] = "views"
                    params["order"] = "desc"
                }

                let querySnapshot

                if (filter) querySnapshot = await getDocs(query(collection(db, "arts"), where(filter, "!=", null)))
                else querySnapshot = await getDocs(query(collection(db, "arts"), orderBy(params["sort"], params["order"])))

                querySnapshot.forEach((doc) => {
                    let artData = doc.data()
                    artData["id"] = doc.id
                    this.arts.push(artData)
                });
            },
            activateSortOptionElement(value) {
                let options = document.getElementsByClassName("sort-section")[0].children
                for (let i = 0; i < options.length; i++) {
                    options[i].classList.remove("active")
                }
                document.getElementById(`sort_${value}`).classList.add("active")
            },
            activateFilterOptionElement(value) {
                if (value) document.getElementById("filter_selection").value = value
            }
        }
    }
</script>

<style scoped>
    .art-content {
        background-color: black;
    }
</style>