import Vue from 'vue'

const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllProjectsData() {
            return this.$store.getters["dashboard/projects/getAllData"]
        },
        getProjectImageFromProjectPage() {
            return this.$store.getters["dashboard/projects/edit/getProjectImagePreview"]

        }
    },

    methods: {},
};

Vue.mixin(mixins);