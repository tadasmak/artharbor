<template>
    <div class="modal-view" v-if="show">
        <div class="modal-content">
            <span class="modal-close" @click="close">&times;</span>
            <div class="row">
                <img class="modal-content-left-section" src="/src/assets/images/random/register_modal_left_side.jpg">
                <div class="modal-content-right-section">
                    <div class="right-section-content">
                        <h1 class="modal-title">Join ArtHarbor</h1>
                        <div class="modal-input-container">
                            <label class="modal-input-label">Add your email:</label>
                            <input id="modal_input_email" class="modal-input" type="email" placeholder="example@email.com">
                        </div>
                        <div class="modal-input-container">
                            <label class="modal-input-label">Choose your password:</label>
                            <input id="modal_input_password" class="modal-input" type="password">
                            <p class="modal-input-helper">Min 6 characters, numbers & letters</p>
                        </div>
                        <div class="modal-button" @click="createUser()">Register</div>
                        <p class="modal-already-member">Already a member? <span @click="switchToLogin()">Log in</span></p>
                        <p class="modal-terms-text">By joining Art Harbor, I confirm that I have read and agree to the Art Harbor <span>Terms of Service</span>, <span>Privacy Policy</span>, and to receive emails and updates.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginModal from "./LoginModal.vue"
    import { db } from "@/firebase"
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
    import { collection, addDoc } from "firebase/firestore"
    export default {
        components: {
            LoginModal
        },
        data() {
            return {
                show: false
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
            createUser() {
                const email = document.getElementById("modal_input_email").value
                const password = document.getElementById("modal_input_password").value

                if (email.length < 8 || password.length < 6) {
                    alert("Email or password is too short or incorrectly formatted!")
                    return;
                }

                const auth = getAuth()
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user)
                    const userData = {
                        email: user.email,
                        firebaseId: user.uid,
                        name: user.providerData[0].displayName,
                        username: user.email.split('@')[0]
                    }
                    this.addUserData(userData)
                    .then(() => this.switchToLogin())
                    .catch((error) => console.log(error))
                    
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    if (errorCode == "auth/email-already-in-use") {
                        alert("A user with entered email already exists!")
                    }
                    // ..
                });
            },
            switchToLogin() {
                this.close()
                this.$emit("open-login")
            },
            async addUserData(data) {
                const docRef = await addDoc(collection(db, "users"), data)
                console.log(`User successfully created! DocRef id: ${docRef.id}` )
            }
        }
    }
</script>