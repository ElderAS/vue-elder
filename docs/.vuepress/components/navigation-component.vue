<script>
import { NavigationComponent } from "node_modules/vue-elder-navigation";
export default {
  template: '<NavigationComponent v-bind="$attrs" v-model="value" />',
  data() {
    return {
      value: []
    };
  },
  components: {
    NavigationComponent
  }
};
</script>
