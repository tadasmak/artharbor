<template>
    <div class="row navigation-section">
        <RouterLink class="navigation-item" exact :class="{ 'active': isActive('/') }" to="/" >Home</RouterLink>
        <RouterLink class="navigation-item" exact :class="{ 'active': isActive('/art') }" to="/art">Art</RouterLink>
        <RouterLink class="navigation-item" exact :class="{ 'active': isActive('/news') }" to="/news">News</RouterLink>
        <RouterLink class="navigation-item" exact :class="{ 'active': isActive('/about') }" to="/about">About</RouterLink>
    </div>
    <div class="row profile-container">
        <span v-if="user" class="profile-signout-button" @click="signOut()">Sign out</span>
        <span v-else class="profile-signup-button" @click="openSignUp()">Sign up</span>
        <div class="row profile-login-button" @click="user ? goToProfile() : openLogin()">
            <span v-if="user">{{ user.username || "Profile" }}</span>
            <span v-else>Log in</span>
            <div class="profile-icon-container">
                <img src="/images/icons/nav_profile.svg">
            </div>
        </div>
    </div>
    <RegisterModal ref="registerModalComponent" @open-login="openLogin()"/>
    <LoginModal ref="loginModalComponent" @open-sign-up="openSignUp()"/>
</template>

<script>
    import { getSessionFirebaseId, clearSessionData } from "../data/authentication"

    import { getUserData } from "../data/user"

    import RegisterModal from "./modals/RegisterModal.vue"
    import LoginModal from "./modals/LoginModal.vue"

    export default {
        components: {
            RegisterModal,
            LoginModal
        },
        data() {
            return {
                firebaseId: getSessionFirebaseId(),
                user: "",
                username: ""
            }
        },
        mounted() {
            getUserData(this.firebaseId)
            .then((userData) => {
                if (userData == null) return

                this.user = userData
                this.username = userData.username
            })
            .catch((error) => {
                console.log(error)
            })
        },
        methods: {
            isActive(value) {
                return this.$route.path == value
            },
            openLogin() {
                this.$refs.loginModalComponent.open()
            },
            openSignUp() {
                this.$refs.registerModalComponent.open()
            },
            signOut() {
                clearSessionData()
                window.location.reload()
            },
            goToProfile() {
                this.$router.push({path: '/profile'})
            }
        }
    }
</script>
    
<style scoped lang="scss">
    @import '../assets/variables.scss';

    .navigation-section {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.9);
        height: 72px;
        width: 100%;
        z-index: 2;
    }
    .navigation-item {  
        width: 100px;
        text-align: center;
        line-height: 72px;
        cursor: pointer;
        color: #cfa4ca;
    }
    .navigation-item.active {
        font-weight: 500;
        border-bottom: 2px solid #cfa4ca;
    }

    .profile-container {
        position: fixed;
        color: white;
        height: 72px;
        z-index: 3;
        right: 10px;
        cursor: pointer;
        
        span {
            line-height: 72px;
            margin-left: 10px;
            padding: 0 5px;
        }
        .profile-login-button span {
            font-weight: 500;
        }
        .profile-signout-button {
            color: rgb(255, 101, 101);
            font-size: 14px;
        }

        .profile-signup-button:hover, .profile-login-button:hover {
            text-decoration: underline;
        }
    }
    .profile-icon-container {
        background-image: linear-gradient(#70A88F, #E6D4E4);
        height: 40px;
        width: 40px;
        margin: auto;
        border-radius: 8px;
        margin-left: 10px;

        img {
            height: 30px;
            width: 30px;
            margin: 5px;
        }
    }
    @media (max-width: $responsive-breakpoint-medium) {
        .navigation-item {
            width: 80px;
        }
    }

    @media (max-width: $responsive-breakpoint-small) {
        .navigation-section {
            justify-content: flex-start;
        }
        
        .navigation-item {
            width: 70px;
        }

        .profile-container span {
            display: none;
        }
    }
</style>