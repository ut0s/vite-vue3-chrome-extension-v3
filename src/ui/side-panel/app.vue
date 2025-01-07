<script setup lang="ts"></script>

<template>
  <UApp>
    <div class="flex flex-col h-full w-full">
      <AppHeader />

      <div class="p-4 prose dark:prose-invert">
        <RouterView />
      </div>
      <div class="grow" />
      <AppFooter />
    </div>
  </UApp>
</template>

<style scoped></style>
