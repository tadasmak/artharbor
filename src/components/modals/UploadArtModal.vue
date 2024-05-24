<template>
    <div class="modal-view" v-if="show">
        <div class="upload-modal-content">
            <span class="modal-close" @click="close()">&times;</span>
            <h2>Upload art</h2>
            <div class="row">
                <form class="column" @submit.prevent="submitForm">
                    <div class="row not-center">
                        <div class="column">
                            <input class="file-input" ref="fileInput" type="file" id="image" accept="image/*" @change="handleFileInput($event)" required>
                            <label v-if="!file" class="file-button" for="image">+</label>
                            <img v-if="file" :src="imageUrl" for="image" @click="openFileInput()" class="file-image"> 
                        </div>
                        <div class="column upload-modal-text-container">
                            <input type="text" class="title-input" placeholder="Title..." v-model="title" required>
                            <textarea class="description-input" placeholder="Description..." v-model="description" required></textarea>
                            <div class="row not-center price-container">
                                <input type="number" class="price-input" placeholder="Price..." v-model="price" required>
                                <span>€</span>
                            </div>
                        </div>
                    </div>
                    <button class="upload-modal-button" type="submit">Upload</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { getSessionFirebaseId } from "../../data/authentication"

    import { addArtData } from "../../data/art"
    import { uploadImageToFirebaseStorage } from "../../data/art"
    import Toastify from 'toastify-js'
    export default {
        data() {
            return {
                show: false,
                image: null,
                title: "",
                description: "",
                price: null,
                firebaseId: getSessionFirebaseId(),

                file: "",
                imageUrl: ""
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
                uploadImageToFirebaseStorage(this.file)
                .then((imageURL) => {
                    console.log(imageURL)
                    // Handle form submission, e.g., upload data to server
                    const artData = {
                        imageUrl: imageURL,
                        title: this.title,
                        description: this.description,
                        price: this.price,
                        authorId: this.firebaseId,
                        createdTimestamp: Math.floor(Date.now() / 1000),
                        createdDate: this.getCurrentDate(),
                        views: 0
                    }

                    addArtData(artData).then(() => {
                        // Reset form fields after submission
                        this.image = null
                        this.title = ''
                        this.description = ''

                        Toastify({
                            text: "Art posted successfully!",
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
                })
            },
            handleFileInput(event) {
                if (event.target.files.length > 0) {
                    this.file = event.target.files[0];
                    this.imageUrl = URL.createObjectURL(this.file); // Convert file to data URL
                }
                console.log(this.file)
            },
            openFileInput() {
                this.$refs.fileInput.click();
            },
            getCurrentDate() {
                const date = new Date()
                const options = { month: 'short', day: '2-digit', year: 'numeric' }
                const formattedDate = date.toLocaleDateString('en-US', options)
                return formattedDate
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
            font-size: 24px;
        }
    }
</style>