import HelloWorld from "@/components/HelloWorld.vue";
import { useCssModule } from "vue";

// eslint-disable-next-line
const { $style } = useCssModule();

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
