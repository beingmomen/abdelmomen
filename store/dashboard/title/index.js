export const state = () => ({
    data: {
        OwnerHeader: null,
        OwnerHeaderDesc: null,
    },
    OwnerId: null,
    AddAction: true

});

export const getters = {
    getOwnerHeader(state) {
        return state.data.OwnerHeader
    },
    getOwnerHeaderDesc(state) {
        return state.data.OwnerHeaderDesc
    },
    getOwnerId(state) {
        return state.OwnerId
    },
    getAddAction(state) {
        return state.AddAction
    },
};

export const actions = {


    getAllDataFromApi({ commit }, payload) {
        commit("setAddAction", {
            key: "AddAction",
            value: payload.empty ? true : false,
        })

        if (payload.empty) {
            commit("setOwnerHeader", {
                key: "OwnerHeader",
                value: null,
            })
            commit("setOwnerHeaderDesc", {
                key: "OwnerHeaderDesc",
                value: null,
            })
            commit("setOwnerId", {
                key: "OwnerId",
                value: null,
            })
        } else {
            payload.forEach((doc) => {
                let data = { ...doc.data(), id: doc.id };
                commit("setOwnerHeader", {
                    key: "OwnerHeader",
                    value: data.OwnerHeader,
                })
                commit("setOwnerHeaderDesc", {
                    key: "OwnerHeaderDesc",
                    value: data.OwnerHeaderDesc,
                })
                commit("setOwnerId", {
                    key: "OwnerId",
                    value: data.id,
                })
            });
        }
    },
    addToDB({ commit, state, rootState, dispatch }, payload) {
        this.$fire.firestore.collection("heroTitle").add(state.data).then((res) => {
        }).catch((err) => {
        });
    },

    editInDB({ commit, state, rootState }, payload) {
        this.$fire.firestore.collection("heroTitle").doc(state.OwnerId).update(state.data).then((res) => {
            this.$toast.success("Edited successfully");
        }).catch((err) => {
        });
    },

    resetData({ state, commit }) {
        Object.keys(state.data).forEach(key => {
            commit(`set${key}`, {
                key,
                value: null,
            })
        });
    }

};

export const mutations = {
    setOwnerHeader(state, val) {
        state.data[val.key] = val.value
    },
    setOwnerHeaderDesc(state, val) {
        state.data[val.key] = val.value
    },
    setAddAction(state, val) {
        state[val.key] = val.value
    },
    setOwnerId(state, val) {
        state[val.key] = val.value
    },
};
