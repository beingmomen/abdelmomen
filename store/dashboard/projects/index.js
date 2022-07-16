export const state = () => ({
    AllData: [],
    Image: null,
    Count: null,
    data: {
        Name: null,
        Desc: null,
        URL: null,
    },
});

export const getters = {
    getName(state) {
        return state.data.Name
    },
    getDesc(state) {
        return state.data.Desc
    },
    getURL(state) {
        return state.data.URL
    },
    getImage(state) {
        return state.Image
    },
    getAllData(state) {
        return state.AllData
    },
    getCount(state) {
        return state.Count
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

    getAllFilterdDataFromApi({ commit }, payload) {
        commit("setAllData", payload)
    },

    addToDB({ state, dispatch }, payload) {
        return this.$fire.storage.ref(`projects/${state.Image.lastModified + state.Image.name}`).put(state.Image).then((res) => {
            res.ref.getDownloadURL().then(Image => {
                this.$fire.firestore.collection("projects").add({ ...state.data, Image }).then((x) => {
                    dispatch("resetData")
                    this.$toast.success("Added successfully");
                })
            })
        })
    },

    resetData({ commit }) {
        commit("setName", { key: "Name", value: null })
        commit("setDesc", { key: "Desc", value: null })
        commit("setURL", { key: "URL", value: null })
        commit("setImage", { key: "Image", value: null })
    }

};

export const mutations = {
    setName(state, val) {
        state.data[val.key] = val.value
    },
    setDesc(state, val) {
        state.data[val.key] = val.value
    },
    setURL(state, val) {
        state.data[val.key] = val.value
    },
    setImage(state, val) {
        state[val.key] = val.value
    },
    setAllData(state, val) {
        state.AllData = val
    },
    setCount(state, val) {
        state.Count = val
    },

};
