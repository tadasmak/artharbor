<template>
    <div class="modal-view" v-if="show">
        <div class="upload-modal-content">
            <span class="modal-close" @click="close()">&times;</span>
            <h2>Edit art</h2>
            <div class="row">
                <form class="column" @submit.prevent="submitForm">
                    <div class="row not-center">
                        <div class="column">
                            <img :src="imageUrl" for="image" class="file-image"> 
                        </div>
                        <div class="column upload-modal-text-container">
                            <input type="text" class="title-input" placeholder="Title..." v-model="editedTitle" required>
                            <textarea class="description-input" placeholder="Description..." v-model="editedDescription" required></textarea>
                            <div class="row not-center price-container">
                                <input type="number" class="price-input" placeholder="Price..." v-model="editedPrice" required>
                                <span>€</span>
                            </div>
                        </div>
                    </div>
                    <button class="upload-modal-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { getSessionFirebaseId } from "../../data/authentication"

    import { editArtData } from "../../data/art"
    import Toastify from 'toastify-js'
    export default {
        props: {
            id: {
                type: String,
                required: true
            },
            imageUrl: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number
            }
        },
        data() {
            return {
                show: false,
                firebaseId: getSessionFirebaseId(),

                editedTitle: "",
                editedDescription: "",
                editedPrice: ""
            }
        },
        watch: {
            title(value) {
                this.editedTitle = value
                console.log(this.editedTitle)
            },
            description(value) {
                this.editedDescription = value
                console.log(this.editedDescription)
            },
            price(value) {
                this.editedPrice = value
                console.log(this.editedPrice)
            }
        },
        methods: {
            open() {
                this.setModalView()
                this.show = true
            },
            close() {
                this.unsetModalView()
                this.show = false
            },
            submitForm() {
                // Handle form submission
                const artData = {
                    id: this.id,
                    title: this.editedTitle,
                    description: this.editedDescription,
                    price: this.editedPrice
                }

                editArtData(artData).then(() => {
                    Toastify({
                        text: "Art edited successfully!",
                        className: "info",
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "#ccc",
                            color: "black"
                        }
                    }).showToast()

                    this.close()
                    this.$emit("refresh-art-data")
                })
            },
            updateTitle(title) {
                this.editedTitle = title;
            },
            updateDescription(description) {
                this.editedDescription = description;
            },
            updatePrice(price) {
                this.editedPrice = price;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '/src/assets/variables.scss';

    .upload-modal-content {
        background-color: black;
        border: 1px solid #ccc;

        position: absolute;
        width: 100%;
        max-width: 800px;
        top: 20%;
        padding: 0 20px;
    }
    .modal-close {
        color: white;
    }
    h2 {
        margin-top: 10px;
        font-size: 32px;
        margin-bottom: 20px;
        text-align: center;
    }
    form {
        width: 100%;
    }
    .file-button, .file-image {
        font-size: 120px;
        font-weight: 500;
        line-height: 130px;
        height: 160px;
        width: 160px;
        object-fit: cover;
        text-align: center;
        background-color: #111;
        border: 1px solid #444;
        transition: 0.5s;
        cursor: pointer;
    }
    .file-image:hover {
        filter: brightness(60%);
    }
    .file-input {
        display: none;
    }
    input, textarea {
        appearance: none;
        background-color: #111;
        color: white;
        border: 1px solid #444;
        padding: 5px 10px;
        margin: 0 20px;
        margin-bottom: 10px;
        
        &:focus-visible {
            outline: none;
        }
    }
    textarea {
        height: 120px;
    }
    .title-input {
        font-size: 32px;
        letter-spacing: 2px;
    }
    .price-container {
        margin-top: 10px;

        span {
            line-height: 32px;
            font-size: 20px;
        }
    }
    .price-input {
        font-size: 20px;
        width: 120px;
    }
    .upload-modal-text-container {
        flex: 1;
        margin: 0 20px;
    }
    .upload-modal-button {
        font-size: 16px;
        font-weight: 500;
        border: 1px solid white;
        background-color: black;
        color: white;
        border-radius: 48px;
        padding: 5px 40px;
        margin: 20px auto;
        cursor: pointer;
    }

    @media (max-width: $responsive-breakpoint-small) {
        .upload-modal-content {
            padding: 0 10px;
        }
        h2 {
            font-size: 24px;
        }
        .file-button, .file-image {
            font-size: 64px;
            line-height: 64px;
            width: 80px;
            height: 80px;
        }
        input, textarea {
            width: 100%;
            margin: 0;
        }
        .title-input {
            font-size: 22px;
        }
    }
</style>