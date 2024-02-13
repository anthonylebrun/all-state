<script setup>
import { provideStore } from "~/composables/useGlobalStore";

provideStore();
</script>

<template>
  <slot />
</template>
