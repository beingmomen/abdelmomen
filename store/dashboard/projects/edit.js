export const state = () => ({
    data: {
        ProjectTitle: null,
        ProjectDesc: null,
    },
    ProjectImage: null,
    ProjectImagePreview: null,
});

export const getters = {
    getProjectTitle(state) {
        return state.data.ProjectTitle
    },
    getProjectDesc(state) {
        return state.data.ProjectDesc
    },
    getProjectImage(state) {
        return state.ProjectImage
    },
    getProjectImagePreview(state) {
        return state.ProjectImagePreview
    },

};

export const actions = {

    getAllDataFromApi({ commit }, payload) {
        commit("setProjectTitle", { key: "ProjectTitle", value: payload.data().ProjectTitle })
        commit("setProjectDesc", { key: "ProjectDesc", value: payload.data().ProjectDesc })
        commit("SetProjectImagePreview", { key: "ProjectImagePreview", value: payload.data().image })
    },

    editInDB({ commit, state }, payload) {
        this.$fire.storage
            .ref(`projects/${state.ProjectImage?.lastModified + state.ProjectImage?.name}`)
            .put(state.ProjectImage).then((res) => {
                res.ref.getDownloadURL().then(image => {
                    this.$fire.firestore.collection("projects").doc(payload).update({ ...state.data, image }).then((x) => {
                        this.$toast.success("Edited successfully");
                    })
                })
            })
    },

};

export const mutations = {
    setProjectTitle(state, val) {
        state.data[val.key] = val.value
    },
    setProjectDesc(state, val) {
        state.data[val.key] = val.value
    },
    setProjectImage(state, val) {
        state[val.key] = val.value
    },
    SetProjectImagePreview(state, val) {
        state[val.key] = val.value
    },
};
