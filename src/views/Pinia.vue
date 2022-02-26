<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <div>{{ counter.count }}</div>
  <div>{{ counter.doubleCount }}</div>
  <button @click="counter.increment">ADD</button>
</template>