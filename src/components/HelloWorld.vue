<template>
  <div ref="root"></div>
  <p>setup => {{ obj.name }}</p>
  <el-button ref="button" type="primary">111</el-button>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const options = reactive([]);
    const model = ref("");
    const setip = ref(0);
    const obj = reactive({
      name: "张三",
    });
    return {
      setip,
      obj,
      options,
      model,
    };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
