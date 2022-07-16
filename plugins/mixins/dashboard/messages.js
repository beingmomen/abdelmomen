import Vue from 'vue'

const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllMessagesData() {
            return this.$store.getters["dashboard/messages/getAllData"]
        },
        getMessagesCount() {
            return this.$store.getters["dashboard/messages/getCount"]
        }
    },

    methods: {},
};

Vue.mixin(mixins);