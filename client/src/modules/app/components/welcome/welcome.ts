import { Component, Vue } from 'vue-property-decorator';
import { VCard, VCardTitle, VResponsive } from "vuetify/lib";

@Component<Welcome>({
    components: {
        VCard,
        VCardTitle,
        VResponsive
    }
})
export default class Welcome extends Vue {}
