<script>
import { ImageComponent } from "node_modules/vue-elder-Image";
export default {
  template: '<ImageComponent v-bind="$attrs" v-model="value" />',
  data() {
    return {
      value: []
    };
  },
  components: {
    ImageComponent
  }
};
</script>
