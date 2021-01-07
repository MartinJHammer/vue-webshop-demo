import Vue from 'vue';
import { UserVuetifyPreset } from 'vuetify';
import Vuetify from 'vuetify/lib/framework';
import { VuetifyThemes, VuetifyThemeVariant } from 'vuetify/types/services/theme';

Vue.use(Vuetify);

enum CustomColors {
    red = '#ad3d3d',
    orange = '#ad7c3d',
}

const vuetifyConfig = {
    theme: {
        themes: {
            light: {
                primary: CustomColors.red,
                secondary: CustomColors.orange,
                accent: CustomColors.orange,
                error: CustomColors.orange,
            } as VuetifyThemeVariant,
        } as VuetifyThemes
    }
} as UserVuetifyPreset;

export default new Vuetify(vuetifyConfig);
