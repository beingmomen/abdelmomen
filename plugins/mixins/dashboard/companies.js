import Vue from 'vue'

const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllCompaniesData() {
            return this.$store.getters["dashboard/companies/getAllData"]
        },
        getImageFromCompanyPage() {
            return this.$store.getters["dashboard/companies/edit/getImagePreview"]
        }
    },

    methods: {},
};

Vue.mixin(mixins);