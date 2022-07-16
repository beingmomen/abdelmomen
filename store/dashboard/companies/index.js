export const state = () => ({
    AllData: [],
    Image: null,
    Count: null,
    data: {
        Name: null,
        FromDate: null,
        ToDate: null,
        Desc: null,
        Type: null,
        URL: null,
        LinkedIn: null,
    },
});

export const getters = {
    getName(state) {
        return state.data.Name
    },
    getCount(state) {
        return state.Count
    },
    getFromDate(state) {
        return state.data.FromDate
    },
    getToDate(state) {
        return state.data.ToDate
    },
    getDesc(state) {
        return state.data.Desc
    },
    getType(state) {
        return state.data.Type
    },
    getURL(state) {
        return state.data.URL
    },
    getLinkedIn(state) {
        return state.data.LinkedIn
    },
    getImage(state) {
        return state.Image
    },
    getAllData(state) {
        return state.AllData
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
        return this.$fire.storage.ref(`companies/${state.Image.lastModified + state.Image.name}`).put(state.Image).then((res) => {
            res.ref.getDownloadURL().then(Image => {
                this.$fire.firestore.collection("companies").add({ ...state.data, Image, createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp() }).then((x) => {
                    dispatch("resetData")
                    this.$toast.success("Added successfully");
                })
            })
        })
    },

    resetData({ commit }) {
        commit("setName", { key: "Name", value: null })
        commit("setDesc", { key: "Desc", value: null })
        commit("setType", { key: "Type", value: null })
        commit("setURL", { key: "URL", value: null })
        commit("FromDate", { key: "Name", value: null })
        commit("ToDate", { key: "Desc", value: null })
        commit("LinkedIn", { key: "URL", value: null })
        commit("setImage", { key: "Image", value: null })
    }

};

export const mutations = {
    setName(state, val) {
        state.data[val.key] = val.value
    },
    setCount(state, val) {
        state.Count = val
    },
    setFromDate(state, val) {
        state.data[val.key] = val.value
    },
    setToDate(state, val) {
        state.data[val.key] = val.value
    },
    setDesc(state, val) {
        state.data[val.key] = val.value
    },
    setType(state, val) {
        state.data[val.key] = val.value
    },
    setURL(state, val) {
        state.data[val.key] = val.value
    },
    setLinkedIn(state, val) {
        state.data[val.key] = val.value
    },
    setImage(state, val) {
        state[val.key] = val.value
    },
    setAllData(state, val) {
        state.AllData = val
    },

};
