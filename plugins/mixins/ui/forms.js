// We haven't added icon's computed property because it makes this mixin coupled with UI

import Vue from 'vue'

const mixins = {
    data() {
        return {
            passwordFieldType: 'password',
        }
    },
    computed: {},

    methods: {
        togglePasswordVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        },
    },
};

Vue.mixin(mixins);