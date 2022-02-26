<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";

// state
const state = reactive({ year: 1 });
const count = ref(0);

// onMounted钩子可以用来在组件完成初始渲染并创建DOM节点后运行代码:
onMounted(() => {
  console.log(`the component is now mounted.`);
});

// methods
function increase() {
  count.value++;
  state.year++;
}

// computed
const doubleCount = computed(() => {
  return count.value * 2;
});

// watch
watch(count, (newCount, oldCount) => {
  console.log("new: ", newCount);
});
</script>

<template>
  <header>
    <RouterLink to="/">Pinia</RouterLink>
    <RouterLink to="/base">Base</RouterLink>
  </header>
  <div>count: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <div>year: {{ state.year }}</div>
  <button @click="increase">ADD</button>
</template>