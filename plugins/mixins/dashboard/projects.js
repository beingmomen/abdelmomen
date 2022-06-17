import Vue from 'vue'

const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllProjectsData() {
            return this.$store.getters["dashboard/projects/getAllData"]
        },
        getImageFromProjectPage() {
            return this.$store.getters["dashboard/projects/edit/getImagePreview"]
        }
    },

    methods: {},
};

Vue.mixin(mixins);