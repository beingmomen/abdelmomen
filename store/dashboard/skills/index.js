export const state = () => ({
    AllData: [],
    data: {
        Name: null,
        ExperienceYears: null,
    },
    Image: null,
    Count: null,

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
    getExperienceYears(state) {
        return state.data.ExperienceYears
    },
    getImage(state) {
        return state.Image
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
        return this.$fire.storage.ref(`skills/${state.Image.lastModified + state.Image.name}`).put(state.Image).then((res) => {
            res.ref.getDownloadURL().then(Image => {
                this.$fire.firestore.collection("skills").add({ ...state.data, Image, createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp() }).then((x) => {
                    dispatch("resetData")
                    this.$toast.success("Added successfully");
                })
            })
        })
    },
    resetData({ commit }) {
        commit("setName", { key: "Name", value: null })
        commit("setExperienceYears", { key: "ExperienceYears", value: null })
        commit("setImage", { key: "Image", value: null })
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
    setExperienceYears(state, val) {
        state.data[val.key] = val.value
    },
    setImage(state, val) {
        state[val.key] = val.value
    },
};
