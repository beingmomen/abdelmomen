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
    },

    methods: {},
};
Vue.mixin(mixins);