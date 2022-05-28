import { $themeConfig } from '~/themeConfig'

export const state = () => ({
  layout: {
    isRTL: $themeConfig.layout.isRTL,
    skin: $themeConfig.layout.skin,
    // skin: localStorage.getItem('vuexy-skin') || $themeConfig.layout.skin,
    routerTransition: $themeConfig.layout.routerTransition,
    type: $themeConfig.layout.type,
    contentWidth: $themeConfig.layout.contentWidth,
    menu: {
      hidden: $themeConfig.layout.menu.hidden,
    },
    navbar: {
      type: $themeConfig.layout.navbar.type,
      backgroundColor: $themeConfig.layout.navbar.backgroundColor,
    },
    footer: {
      type: $themeConfig.layout.footer.type,
    },
  },
});

// export const getters = {
//   // this.$store.getters["test/function()"]
// };

// export const actions = {


// };

// export const mutations = {
//   // this.$store.commit("test/function()");
// };
