export const state = () => ({
    data: {
        Name: null,
        ExperienceYears: null,
    },
    Image: null,
    ImagePreview: null,
});

export const getters = {
    getName(state) {
        return state.data.Name
    },
    getExperienceYears(state) {
        return state.data.ExperienceYears
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
        commit("setExperienceYears", { key: "ExperienceYears", value: payload.data().ExperienceYears })
        commit("SetImagePreview", { key: "ImagePreview", value: payload.data().Image })
    },

    editInDB({ commit, state }, payload) {
        return this.$fire.storage
            .ref(`skills/${state.Image?.lastModified + state.Image?.name}`)
            .put(state.Image).then((res) => {
                res.ref.getDownloadURL().then(img => {
                    let Image = state.Image ? img : state.ImagePreview
                    this.$fire.firestore.collection("skills").doc(payload).update({ ...state.data, Image }).then((x) => {
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
    setExperienceYears(state, val) {
        state.data[val.key] = val.value
    },
    setImage(state, val) {
        state[val.key] = val.value
    },
    SetImagePreview(state, val) {
        state[val.key] = val.value
    },
};
