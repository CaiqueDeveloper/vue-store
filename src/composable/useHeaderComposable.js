import { useGetters, useStore } from 'vuex-composition-helpers'

export default () => {
    const store = useStore();

    const { totalItemCart } = useGetters({ totalItemCart: 'cart/totalItemCart' })
    const showSideBarCart = () => store.dispatch('utils/changeStateSideBarCart')

    const showMenuMobile = () => {

        const navbar = document.getElementById('navbar-default');
        if (navbar.classList.contains('hidden')) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
        
    }
    return {
        totalItemCart,
        showSideBarCart,
        showMenuMobile
    }

}