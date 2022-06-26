import Vue from 'vue'

const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllSkillsData() {
            return this.$store.getters["dashboard/skills/getAllData"]
        },
        getImageFromSkillsPage() {
            return this.$store.getters["dashboard/skills/edit/getImagePreview"]
        },
        getSkillsCount() {
            return this.$store.getters["dashboard/skills/getCount"]
        }
    },

    methods: {},
};

Vue.mixin(mixins);