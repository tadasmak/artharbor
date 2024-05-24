<template>
    <main>
        <div class="profile-content content-smaller">
            <div class="column center">
                <div class="profile-container">
                    <img class="profile-icon" src="/images/icons/profile.svg">
                </div>
                <h1 class="profile-name-container">{{ user.name || user.username }}</h1>
                <div class="profile-email">{{ user.email }}</div>
            </div>
            <div class="profile-arts">
                <div class="profile-art-container row not-center" v-for="(art, index) in arts" :key="index">
                    <RouterLink class="row not-center profile-art-clickable-area" :to="`/art/${art.id}`">
                        <img class="profile-art-image" :src="art.imageUrl">
                        <div class="profile-art-text-container column">
                            <h2 class="profile-art-title">{{ art.title }}</h2>
                            <p class="profile-art-description">{{ art.description }}</p>
                            <div class="row profile-art-last-row">
                                <div v-if="art.price" class="profile-art-price row"><span class="label">Price: </span><span class="value">{{ art.price }}€</span></div>
                                <p class="profile-art-date"><span class="label">Created: </span><span>{{ art.createdDate }}</span></p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div v-if="arts.length == 0" class="profile-arts-empty">This artist doesn't have any uploaded art yet.</div>
            </div>
        </div>
    </main> 
</template>

<script>
    import { getSessionFirebaseId } from '../data/authentication'
    import { getUserData, getUserArts } from '../data/user'

    export default {
        data() {
            return {
                firebaseId: this.$route.params.id,
                user: "",
                arts: "",
            }
        },
        mounted() {
            this.getUserData()
            this.getArtData()
        },
        methods: {
            getUserData() {
                getUserData(this.firebaseId)
                .then((userData) => {
                    this.user = userData
                })
                .catch((error) => {
                    console.log(error)
                })
            },
            getArtData() {
                getUserArts(this.firebaseId)
                .then((artData) => {
                    this.arts = artData
                    console.log(this.arts)
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';

    .profile-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 240px;
        height: 240px;
        background-image: linear-gradient(#70A88F, #E6D4E4);
        border-radius: 120px;
    }
    .profile-icon {
        width: 220px;
        height: 220px;
    }
    .profile-name-container {
        margin-top: 20px;
        font-size: 40px;
        font-weight: 500;
        line-height: 54px;
        text-align: center;
    }
    .profile-email {
        font-size: 18px;
        color: #CECECE;
    }
    .profile-button {
        font-size: 16px;
        font-weight: 500;
        border: 1px solid white;
        border-radius: 48px;
        padding: 5px 40px;
        margin-top: 20px;
        cursor: pointer;
    }

    .profile-arts {
        margin-top: 40px;
    }
    .profile-arts-empty {
        text-align: center;
        letter-spacing: 2px;
        margin-top: 60px;
    }
    .profile-art-container {
        height: 260px;
        width: 100%;
        padding: 20px;

        &:hover {
            background-color: #222;
        }
    }
    .profile-art-clickable-area {
        width: 100%;
    }
    .profile-art-image {
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
    }
    .profile-art-text-container {
        padding: 0 20px;
        width: 100%;
        overflow: hidden;
    }
    .profile-art-title {
        font-size: 32px;
        font-weight: 500;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .profile-art-description {
        display: -webkit-box;
        font-size: 18px;
        width: 100%;
        color: #cecece;
        overflow: hidden;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        margin-bottom: 20px;
    }
    .profile-art-last-row {
        margin-top: auto;
    }
    .profile-art-date {
        color: #cecece;
        margin: auto 0;
        margin-left: auto;

        span {
            color: white;
            font-weight: 500;
        }
    }
    .profile-art-price {
        color: #cecece;
        margin: auto 0;
        font-size: 18px;
        line-height: 32px;

        .value {
            color: #cfa4ca;
            font-size: 22px;
            font-weight: 500;
            margin-left: 5px;
        }
    }

    @media (max-width: $responsive-breakpoint-small) {
        .profile-container {
            height: 180px;
            width: 180px;
        }
        .profile-icon {
            height: 160px;
            width: 160px;
        }
        .profile-name-container {
            font-size: 32px;
            line-height: 40px;
        }
        .profile-email {
            font-size: 16px;
        }
        .profile-button {
            font-size: 14px;
            padding: 5px 30px;
        }
        .profile-art-text-container {
            padding: 0 10px;
        }
        .profile-art-container {
            height: 160px;
            padding: 20px 0;
        }
        .profile-art-image {
            height: 80%;
        }
        .profile-art-title {
            font-size: 20px;
        }
        .profile-art-description {
            font-size: 14px;
            line-height: 16px;
            -webkit-line-clamp: 3;
            margin-bottom: 0;
        }
        .profile-art-date .label {
            display: none;
        }
        .profile-art-price {
            font-size: 16px;
            line-height: 24px;
            margin-right: auto;

            .label {
                display: none;
            }

            span {
                font-size: 18px;
            }
        }
    }
</style>