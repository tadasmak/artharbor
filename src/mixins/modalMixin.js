export const modalMixin = {
    methods: {
        setModalView() {
            document.body.style.overflow = 'hidden' // Disable scrolling
        },
        unsetModalView() {
            document.body.style.overflow = '' // Enable scrolling
        }
    }
}