import Vue from 'vue'

const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllMessagesData() {
            return this.$store.getters["dashboard/messages/getAllData"]
        },
    },

    methods: {},
};

Vue.mixin(mixins);