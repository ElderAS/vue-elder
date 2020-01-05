<script>
import { FileComponent } from "node_modules/vue-elder-file";
export default {
  template: '<FileComponent v-bind="$attrs" v-model="value" />',
  data() {
    return {
      value: []
    };
  },
  components: {
    FileComponent
  }
};
</script>
