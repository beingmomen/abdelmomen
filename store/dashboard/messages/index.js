export const state = () => ({
    AllData: []
});

export const getters = {

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







};

export const mutations = {
    setAllData(state, val) {
        state.AllData = val
    },

};
