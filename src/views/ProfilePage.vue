<template>
    <main>
        <div class="profile-content content-smaller">
            <div class="column center">
                <div class="profile-container">
                    <img class="profile-icon" src="../assets/images/icons/profile.svg">
                </div>
                <h1 class="profile-name-container">
                    <span id="profile_name_text">{{ userName || "Artist" }}</span>
                    <img id="profile_name_edit_button" @click="toggleEditName()" src="../assets/images/icons/edit.svg">
                    <div id="profile_name_edit" class="hidden">
                        <input id="profile_name_input" v-model="userName" @input="showSubmitNameButton()" placeholder="Enter name...">
                        <span id="profile_name_submit" class="hidden" @click="submitName()">✔</span>
                        <span id="profile_name_cancel" @click="toggleEditName()">×</span>
                    </div>
                </h1>
                <div class="profile-email">{{ user.email }}</div>
                <div class="profile-button" @click="addArt()">Add an art piece</div>
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
                    <div class="profile-dropdown-container row v-center">
                        <div class="profile-dropdown-icon" :id="'dropdown_trigger' + index" @click="toggleDropdown(index)">
                            <div class="dropdown-options" :id="'dropdown_options' + index">
                                <div class="edit" @click="editArt(art)">Edit</div>
                                <div class="delete" @click="deleteArt(art.id)">Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="arts.length == 0" class="profile-arts-empty">You don't have any uploaded art yet.</div>
            </div>
        </div>

        <UploadArtModal ref="uploadArtModal" @refresh-art-data="getArtData()"/>
        <EditArtModal ref="editArtModal" :imageUrl="editImageUrl" :title="editTitle" :description="editDescription" :price="editPrice" :id="editId" @refresh-art-data="getArtData()"/>
    </main> 
</template>

<script>
    import { RouterLink } from 'vue-router'
    import { getSessionFirebaseId } from '../data/authentication'
    import { getUserData, getUserArts, editUserData, deleteCurrentUserArt } from '../data/user'

    import UploadArtModal from "../components/modals/UploadArtModal.vue"
    import EditArtModal from "../components/modals/EditArtModal.vue"

    export default {
        components: {
            UploadArtModal,
            EditArtModal
        },
        data() {
            return {
                firebaseId: getSessionFirebaseId(),

                user: "",
                arts: "",

                userName: "",

                editImageUrl: "",
                editTitle: "",
                editDescription: "",
                editPrice: null,
                editId: "",
                
                openedDropdownIndex: {
                    index: null,
                    firstClick: true
                }
            }
        },
        mounted() {
            this.getUserData()
            this.getArtData()
        },
        methods: {
            toggleDropdown(index) {
                if (this.openedDropdownIndex["index"] == null) {
                    document.getElementById(`dropdown_options${index}`).style.display = "block"
                    this.openedDropdownIndex["index"] = index
                    this.openedDropdownIndex["firstClick"] = true
                    document.addEventListener("click", this.closeDropdown)
                }
            },
            closeDropdown() {
                if (this.openedDropdownIndex["firstClick"]) {
                    this.openedDropdownIndex["firstClick"] = false
                }
                else {
                    document.getElementById(`dropdown_options${this.openedDropdownIndex["index"]}`).style.display = "none"
                    this.openedDropdownIndex["index"] = null
                    this.openedDropdownIndex["firstClick"] = true
                    document.removeEventListener("click", this.closeDropdown)
                }
            },

            addArt() {
                this.$refs.uploadArtModal.open()
            },
            editArt(art) {
                this.editImageUrl = art.imageUrl
                this.editTitle = art.title
                this.editDescription = art.description
                this.editPrice = art.price || null
                this.editId = art.id
                
                this.$refs.editArtModal.open()
            },
            deleteArt(id) {
                deleteCurrentUserArt(id).then(() => this.getArtData())
            },
            getUserData() {
                getUserData(this.firebaseId)
                .then((userData) => {
                    this.user = userData
                    this.userName = userData.name
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
            },
            toggleEditName() {
                document.getElementById("profile_name_text").classList.toggle("hidden")
                document.getElementById("profile_name_edit_button").classList.toggle("hidden")

                document.getElementById("profile_name_edit").classList.toggle("hidden")
            },
            showSubmitNameButton() {
                if (this.user.name != this.userName) {
                    document.getElementById("profile_name_cancel").classList.add("hidden")
                    document.getElementById("profile_name_submit").classList.remove("hidden")
                }
                else {
                    document.getElementById("profile_name_submit").classList.add("hidden")
                    document.getElementById("profile_name_cancel").classList.remove("hidden")
                }
            },
            hideSubmitNameButton() {
                document.getElementById("profile_name_submit").classList.add("hidden")
                document.getElementById("profile_name_cancel").classList.remove("hidden")
            },
            submitName() {
                let data = { name: this.userName }
                editUserData(this.user.id, data).then(() => {
                    this.toggleEditName()
                    this.getUserData()
                    this.hideSubmitNameButton()
                })
                .catch((error) => {
                    alert("There was an error submitting your name")
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
        position: relative;
        margin-top: 20px;
        font-size: 40px;
        font-weight: 500;
        line-height: 54px;
    }
    #profile_name_edit_button {
        position: absolute;
        height: 24px;
        right: -40px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    #profile_name_input {
        appearance: none;
        text-align: center;
        background-color: black;
        color: white;
        font-size: 24px;
        width: 100%;
        border: none;
        border-bottom: 1px solid grey;
        padding: 5px 10px;
        margin-bottom: 10px;
    }
    #profile_name_submit, #profile_name_cancel {
        position: absolute;
        right: -40px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    #profile_name_submit {
        color: green;
        font-size: 28px;
    }
    #profile_name_cancel {
        color: crimson;
        font-size: 32px;
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
        transition: 0.2s;

        &:hover {
            background-color: #222;
        }
    }
    .profile-art-clickable-area {
        width: 90%;
    }
    .profile-art-image {
        height: 100%;
        max-width: initial;
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
    .profile-dropdown-container {
        min-width: 10%;
        margin-left: auto;
    }
    .profile-dropdown-icon {
        position: relative;
        background-image: url("../assets/images/icons/dropdown.svg");
        background-repeat: no-repeat;
        background-position: center;
        width: 5px;
        height: 40px;
        padding: 20px;
        cursor: pointer;
    }

    .dropdown-options {
        display: none;
        position: absolute;
        background-color: black;
        color: white;
        border: 1px solid #ccc;
        width: 120px; /* Adjust width as needed */
        right: 0;
        bottom: -84px;

        div {
            padding: 8px;
            border: 1px solid #444;
            cursor: pointer;

            &:hover {
                background-color: rgb(41, 41, 41);
            }
        }

        .delete {
            color: rgb(255, 101, 101);
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
            text-align: center;
            font-size: 28px;
            line-height: 40px;
            max-width: 80%;
        }
        #profile_name_edit_button {
            height: 20px;
            right: -32px;
        }
        #profile_name_edit {
            width: 90%;
            margin: auto;
        }
        #profile_name_submit, #profile_name_cancel {
            right: -20px;
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
            margin-bottom: 0;
            -webkit-line-clamp: 3;
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

            .value {
                font-size: 18px;
            }
        }

        .profile-dropdown-icon {
            padding: 5px 10px;
        }
    }
</style>