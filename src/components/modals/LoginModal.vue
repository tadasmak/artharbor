<template>
    <div class="modal-view" v-if="show">
        <div class="modal-content">
            <span class="modal-close" @click="close()">&times;</span>
            <div class="row">
                <img class="modal-content-left-section" src="/images/random/login_modal_left_side.jpg">
                <div class="modal-content-right-section">
                    <div class="right-section-content">
                        <h1 class="modal-title">Log in</h1>
                        <div class="modal-input-container">
                            <label class="modal-input-label">Email:</label>
                            <input id="modal_input_email" class="modal-input" type="email" placeholder="example@email.com">
                        </div>
                        <div class="modal-input-container">
                            <label class="modal-input-label">Password:</label>
                            <input id="modal_input_password" class="modal-input" type="password">
                        </div>
                        <div class="modal-button" @click="login()">Log in</div>
                        <p class="modal-already-member">Don't have an account? <span @click="switchToSignUp()">Sign up</span></p>
                        <p class="modal-terms-text">By logging in to Art Harbor, I confirm that I have read and agree to the Art Harbor <span>Terms of Service</span>, <span>Privacy Policy</span>, and to receive emails and updates.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { setSessionData } from "../../data/authentication"
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
    export default {
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
            login() {
                const email = document.getElementById("modal_input_email").value
                const password = document.getElementById("modal_input_password").value

                const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    const userData = {
                        accessToken: user.accessToken,
                        email: user.email,
                        firebaseId: user.uid
                    }
                    setSessionData(userData)
                    this.close()
                    window.location.reload()
                })
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    alert("Invalid credentials")
                    console.log(errorMessage)
                });
            },
            switchToSignUp() {
                this.close()
                this.$emit("open-sign-up")
            }
        }
    }
</script>