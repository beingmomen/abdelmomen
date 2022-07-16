export const state = () => ({
    data: {
        Name: null,
        Desc: null,
        URL: null,
    },
    Image: null,
    ImagePreview: null,
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
    getImagePreview(state) {
        return state.ImagePreview
    },

};

export const actions = {

    getAllDataFromApi({ commit }, payload) {
        commit("setName", { key: "Name", value: payload.data().Name })
        commit("setDesc", { key: "Desc", value: payload.data().Desc })
        commit("setURL", { key: "URL", value: payload.data().URL })
        commit("SetImagePreview", { key: "ImagePreview", value: payload.data().Image })
    },

    editInDB({ commit, state }, payload) {
        return this.$fire.storage
            .ref(`projects/${state.Image?.lastModified + state.Image?.name}`)
            .put(state.Image).then((res) => {
                res.ref.getDownloadURL().then(img => {
                    let Image = state.Image ? img : state.ImagePreview
                    this.$fire.firestore.collection("projects").doc(payload).update({ ...state.data, Image }).then((x) => {
                        this.$toast.success("Edited successfully");
                    })
                })
            })
    },

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
    SetImagePreview(state, val) {
        state[val.key] = val.value
    },
};
