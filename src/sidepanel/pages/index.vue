<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'

const version = __VERSION__
const displayName = __DISPLAY_NAME__
const gitURL = __GITHUB_URL__
const gitCommit = __GIT_COMMIT__
const gitCommitURL = `${gitURL}/commit/${gitCommit}`

const store = useAppStore()

const name = computed(() => store.name)
const count = computed(() => store.count)
</script>

<template>
  <div class="text-center p-4 flex flex-col gap-y-2">
    <h1 class="text-3xl font-bold underline pb-6">
      Hello world from sidepanel!
    </h1>

    <p>Vesion: {{ version }}</p>
    <p>Display name: {{ displayName }}</p>

    <p>
      GIT URL:
      <a class="undeline text-green-500" :href="gitURL">
        {{ gitURL }}
      </a>
    </p>

    <p>
      GIT Commit:
      <a :href="gitCommitURL" class="text-green-500">
        (#{{ gitCommit }})
      </a>
    </p>

    <p>Name: {{ name }}</p>
    <p>Count: {{ count }}</p>

    <div class="flex gap-x-2 justify-center">
      <button class="btn btn-primary" @click="store.increment">
        Increment
      </button>
      <button class="btn btn-primary" @click="store.decrement">
        Decrement
      </button>
    </div>

    <RouterLink class="underline" to="/common/about">
      About
    </RouterLink>
  </div>
</template>
