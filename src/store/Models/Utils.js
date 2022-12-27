
const state = () =>({
    showSideBarCart: false,
});

const mutations = {
    changeStateSideBarCart(state){
        state.showSideBarCart = !state.showSideBarCart
    },
};
const actions = {
    changeStateSideBarCart( {commit}){
        commit('changeStateSideBarCart')
    },
};
const getters = {
    getStateSideBarCart(state){
        return state.showSideBarCart
    },
};

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}