export const state = () => ({
    AllData: [],
    ProjectImage: null,
    data: {
        ProjectTitle: null,
        ProjectDesc: null,
    },
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
    getAllData(state) {
        return state.AllData
    },
};

export const actions = {

    getAllDataFromApi({ commit }, payload) {
        let arr = []
        payload.forEach((doc) => {
            let data = { ...doc.data(), id: doc.id };
            arr.push(data)
        })
        commit("setAllData", arr)
    },

    addToDB({ commit, state, dispatch }, payload) {

        // console.warn("this.$fire.firestore :::", this.$fire.firestore.collection("projects"));

        // this.$fire.firestore.collection("projects").add({
        //     name: "project 2",
        //     desc: "desc  2"
        // }).then((res) => {
        //     console.warn("res ::::", res);
        // }).catch((err) => {
        // });

        // this.$fire.firestore.collection("projects").get().then((res) => {
        //     let data = res.docs.map(z => Object.assign({}, z.data(), { id: z.id }))
        //     console.warn("z get ::::", "=>", data);

        // }).catch((err) => {
        // });

        // this.$fire.firestore.collection("projects").doc("sk3cJFJSKhnAIXRcaDWC").delete().then((res) => {
        //     // let data = res.docs.map(z => Object.assign({}, z.data(), { id: z.id }))
        //     console.warn("z get ::::", "=>", res);

        // }).catch((err) => {
        // });

        return this.$fire.storage.ref(`projects/${state.ProjectImage.lastModified + state.ProjectImage.name}`).put(state.ProjectImage).then((res) => {
            res.ref.getDownloadURL().then(image => {
                this.$fire.firestore.collection("projects").add({ ...state.data, image }).then((x) => {
                    dispatch("resetData")
                    this.$toast.success("Added successfully");
                }).catch((err) => {
                });
            })
        }).catch((err) => {
        });
    },

    resetData({ commit }, payload) {
        commit("setProjectTitle", { key: "ProjectTitle", value: null })
        commit("setProjectDesc", { key: "ProjectDesc", value: null })
        commit("setProjectImage", { key: "ProjectImage", value: null })
    }

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
    setAllData(state, val) {
        state.AllData = val
    },

};
