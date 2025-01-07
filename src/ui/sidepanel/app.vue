<script setup lang="ts">
import { Notivue, Notification } from "notivue"
</script>

<template>
  <div class="flex flex-col h-full w-full">
    <AppHeader />

    <div class="p-4 prose">
      <RouterView />
    </div>
    <div class="grow" />
    <AppFooter />

    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
  </div>
</template>

<style scoped></style>
