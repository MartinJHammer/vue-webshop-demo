import { Component, Vue } from 'vue-property-decorator';
import { VCard, VCardTitle } from "vuetify/lib";

@Component<Welcome>({
    components: {
        VCard,
        VCardTitle
    }
})
export default class Welcome extends Vue {}
