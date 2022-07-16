export const state = () => ({
    data: {
        Name: null,
        FromDate: null,
        ToDate: null,
        Desc: null,
        Type: null,
        URL: null,
        LinkedIn: null,
    },
    Image: null,
    ImagePreview: null,
});

export const getters = {
    getName(state) {
        return state.data.Name
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
    getImagePreview(state) {
        return state.ImagePreview
    },

};

export const actions = {

    getAllDataFromApi({ commit }, payload) {
        commit("setName", { key: "Name", value: payload.data().Name })
        commit("setDesc", { key: "Desc", value: payload.data().Desc })
        commit("setType", { key: "Type", value: payload.data().Type })
        commit("setURL", { key: "URL", value: payload.data().URL })
        commit("setFromDate", { key: "FromDate", value: payload.data().FromDate })
        commit("setToDate", { key: "ToDate", value: payload.data().ToDate })
        commit("setLinkedIn", { key: "LinkedIn", value: payload.data().LinkedIn })
        commit("SetImagePreview", { key: "ImagePreview", value: payload.data().Image })
    },

    editInDB({ commit, state }, payload) {
        return this.$fire.storage
            .ref(`companies/${state.Image?.lastModified + state.Image?.name}`)
            .put(state.Image).then((res) => {
                res.ref.getDownloadURL().then(img => {
                    let Image = state.Image ? img : state.ImagePreview
                    this.$fire.firestore.collection("companies").doc(payload).update({ ...state.data, Image }).then((x) => {
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
    SetImagePreview(state, val) {
        state[val.key] = val.value
    },
};
