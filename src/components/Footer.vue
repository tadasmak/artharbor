<template>
    <div class="footer">
        <div class="footer-content row">
            <div class="column footer-content-column">
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
                <a>Contact</a>
            </div>
            <div class="column footer-content-column">
                <h3>Join our mailing list:</h3>
                <div class="row mailing-list-input-container">
                    <input class="mailing-list-input" placeholder="Email address"/>
                    <div class="mailing-list-button green-button">Subscribe</div>
                </div>
            </div>
            <div class="column footer-content-column">
                <a class="copyright-mark">© 2024 Art Harbor</a>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';

    .footer {
        padding: 50px 0;
        background-color: #0C0C21;
    }
    .footer-content {
        margin: auto;
        max-width: 600px;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .footer-content-column {
        width: 50%;
        padding: 15px;
    }
    .copyright-mark {
        display: block;
        font-weight: 500;
        font-size: 20px;
        padding-top: 20px;
    }
    .mailing-list-input-container {
        margin-top: 10px;
    }
    .mailing-list-input {
        padding: 0 10px;
        height: 32px;
        line-height: 32px;
        
    }
    .mailing-list-button {
        margin-left: 10px;
        height: 32px;
        line-height: 32px;
        padding: 0 10px;
    }

    @media (max-width: $responsive-breakpoint-small) {
        .footer {
            padding: 20px;
        }
        .footer-content {
            flex-direction: column;
        }
        .footer-content-column {
            width: 100%;
        }
        .mailing-list-input-container {
            justify-content: flex-start;
        }
    }
</style>