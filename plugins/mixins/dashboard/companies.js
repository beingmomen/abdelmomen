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
        },
        getCompaniesCount() {
            return this.$store.getters["dashboard/companies/getCount"]
        }
    },

    methods: {},
};

Vue.mixin(mixins);