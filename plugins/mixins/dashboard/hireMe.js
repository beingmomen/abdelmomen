import Vue from 'vue'

const mixins = {
    data() {
        return {
            projetsTypeVSD: [
                { id: "0", title: "Frontend Developer" },
                { id: "1", title: "Full-Stack Developer" },
                { id: "2", title: "Backend Developer" },
            ],
        }
    },
    computed: {
        getAllHireRequestesData() {
            return this.$store.getters["dashboard/hireMe/getAllData"]
        },
        getHireMeCount() {
            return this.$store.getters["dashboard/hireMe/getCount"]
        }
    },

    methods: {},
};

Vue.mixin(mixins);