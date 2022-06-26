import Vue from 'vue'

const mixins = {
    data() {
        return {}
    },
    computed: {
        getAddActionForTiltlePage() {
            return this.$store.getters["dashboard/title/getAddAction"]
        },
        getOwnerIdForTiltlePage() {
            return this.$store.getters["dashboard/title/getOwnerId"]
        },
        getOwnerHeaderMixins() {
            return this.$store.getters["dashboard/title/getOwnerHeader"]
        },
        getOwnerHeaderDescMixins() {
            return this.$store.getters["dashboard/title/getOwnerHeaderDesc"]
        },
    },

    methods: {},
};
Vue.mixin(mixins);