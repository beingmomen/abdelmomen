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
        }
    },

    methods: {},
};

Vue.mixin(mixins);