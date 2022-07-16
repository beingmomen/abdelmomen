export const state = () => ({
    data: {
        FullName: null,
        Email: null,
        Subject: null,
        Message: null,
    },


    hire: {
        Name: null,
        Email: null,
        ProjectType: "Frontend Developer",
        Description: null
    }
});

export const getters = {
    getFullName(state) {
        return state.data.FullName
    },
    getEmail(state) {
        return state.data.Email
    },
    getSubject(state) {
        return state.data.Subject
    },
    getMessage(state) {
        return state.data.Message
    },

};

export const actions = {


    addToDB({ state, dispatch }, payload) {
        this.$fire.firestore.collection("messages").add(state.data).then((x) => {
            this.$toast.success("Message Sent successfully");
            this.$router.push("/")
            setTimeout(() => {
                dispatch("resetData")
            }, 1000);
        }).then(() => {
        })
    },


    resetData({ commit }) {
        commit("setFullName", { key: "FullName", value: null })
        commit("setEmail", { key: "Email", value: null })
        commit("setSubject", { key: "Subject", value: null })
        commit("setMessage", { key: "Message", value: null })
    }

};

export const mutations = {
    setFullName(state, val) {
        state.data[val.key] = val.value
    },
    setEmail(state, val) {
        state.data[val.key] = val.value
    },
    setSubject(state, val) {
        state.data[val.key] = val.value
    },
    setMessage(state, val) {
        state.data[val.key] = val.value
    },
};
