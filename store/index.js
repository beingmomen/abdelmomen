export const state = () => ({
    token: null,
    layoutCollapsed: true,
    sidebar: false,
    mode: true,
    dashDir: "rtl"
});

export const getters = {
    getLayoutCollapsed(state) {
        return state.layoutCollapsed
    },
    getSidebar(state) {
        return state.sidebar
    },
    getMode(state) {
        return state.mode
    },
    getDashDir(state) {
        return state.dashDir
    }
};

export const actions = {
    toggleLayoutCollapsed({ dispatch, commit, state }, payload) {
        if (payload > 1200) {
            commit("setLayoutCollapsed", state.layoutCollapsed ? false : true)
        } else {
            dispatch("hideSidebar")
        }
    },
    hideSidebar({ commit, state }) {
        commit("setSidebar", state.sidebar ? false : true)
    },
    layoutMode({ commit }, payload) {
        commit("setMode", payload == 'light' ? true : false)
    },
    changeDashDir({ commit }, payload) {
        if (payload == "ar") {
            commit("setDashDir", "rtl")
        } else {
            commit("setDashDir", "ltr")
        }
    },
    // nuxtServerInit({ commit }, { $fire }) {
    //     let projects = [];
    //     $fire.firestore
    //         .collection("projects")
    //         .get()
    //         .then((res) => {
    //             res.forEach((doc) => {
    //                 projects.push({ ...doc.data(), id: doc.id });
    //             });
    //         })
    //         .then(() => {
    //             console.warn("projects array root :::", projects);
    //             commit("dashboard/projects/setAllData", projects, { root: true })
    //             // store.dispatch("dashboard/projects/getDataFromApi", {
    //             //   key: "AllData",
    //             //   value: projects,
    //             // });
    //         })
    // }

};

export const mutations = {
    setLayoutCollapsed(state, val) {
        state.layoutCollapsed = val
    },
    setSidebar(state, val) {
        state.sidebar = val
    },
    setMode(state, val) {
        state.mode = val
    },
    setDashDir(state, val) {
        state.dashDir = val
    }
};