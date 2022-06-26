export const state = () => ({
    AllData: [],
    Count: null,
    data: {
        Name: null,
        Email: null,
        ProjectType: "Frontend Developer",
        Description: null
    }
});

export const getters = {
    getAllData(state) {
        return state.AllData
    },
    getCount(state) {
        return state.Count
    },
    getName(state) {
        return state.data.Name
    },
    getEmail(state) {
        return state.data.Email
    },
    getProjectType(state) {
        return state.data.ProjectType
    },
    getDescription(state) {
        return state.data.Description
    },

};

export const actions = {
    getAllDataFromApi({ commit }, payload) {
        commit("setCount", payload.size)
        let arr = []
        payload.forEach((doc) => {
            let data = { ...doc.data(), id: doc.id };
            arr.push(data)
        })
        commit("setAllData", arr)
    },

    addToDB({ state, dispatch }, payload) {
        this.$fire.firestore.collection("hireMe").add(state.data).then((x) => {
            this.$toast.success("Request Sent successfully");
            setTimeout(() => {
                dispatch("resetData")
            }, 1000);
        }).then(() => {
        })
    },


    resetData({ commit }) {
        commit("setName", { key: "Name", value: null })
        commit("setEmail", { key: "Email", value: null })
        commit("setProjectType", { key: "ProjectType", value: { title: "Frontend Developer" } })
        commit("setDescription", { key: "Description", value: null })
    }

};

export const mutations = {
    setAllData(state, val) {
        state.AllData = val
    },
    setCount(state, val) {
        state.Count = val
    },
    setName(state, val) {
        state.data[val.key] = val.value
    },
    setEmail(state, val) {
        state.data[val.key] = val.value
    },
    setProjectType(state, val) {
        state.data[val.key] = val.value.title
    },
    setDescription(state, val) {
        state.data[val.key] = val.value
    },
};
