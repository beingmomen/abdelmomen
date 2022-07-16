export const state = () => ({
    AllData: [],
    Count: null,
});

export const getters = {

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







};

export const mutations = {
    setAllData(state, val) {
        state.AllData = val
    },
    setCount(state, val) {
        state.Count = val
    },

};
