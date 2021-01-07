import Vue from 'vue';
import { UserVuetifyPreset } from 'vuetify';
import Vuetify from 'vuetify/lib/framework';
import { VuetifyThemes, VuetifyThemeVariant } from 'vuetify/types/services/theme';

Vue.use(Vuetify);

enum CustomColors {
    red = '#ad3d3d',
    purple = '#3d44ad',
}

const vuetifyConfig = {
    theme: {
        themes: {
            light: {
                primary: CustomColors.red,
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
            } as VuetifyThemeVariant,
        } as VuetifyThemes
    }
} as UserVuetifyPreset;

export default new Vuetify(vuetifyConfig);
