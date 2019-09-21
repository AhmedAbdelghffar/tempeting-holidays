import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#228FCD',
        secondary: '#F79100',
        third: "#103A76",
        anchor: '#103A76',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
