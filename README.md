# Vite Vue 3 Browser Extension (Manifest V3)

[![Build Status](https://github.com/mubaidr/vite-vue3-browser-extension-v3/actions/workflows/build.yml/badge.svg)](https://github.com/mubaidr/vite-vue3-browser-extension-v3/actions/workflows/build.yml)


Modern, opinionated starter template for browser extensions using [Vite](https://vitejs.dev/), [Vue 3](https://vuejs.org/), and Manifest V3. Supports Chrome, Firefox, and more. Includes file-based routing, state management, composables, and rich UI components.



## Features

- Multi-context: background, popup, options, content script, devtools, side panel, offscreen
- File-based routing (auto-register UI pages)
- Vue 3 Composition API, Pinia, composables
- Nuxt/UI v3, shadcn-vue, Tailwind CSS 4
- WebExtension utilities: `webext-bridge`, `webextension-polyfill`



## Quick Start

```bash
npx degit mubaidr/vite-vue3-browser-extension-v3 my-webext
cd my-webext
npm install
npm run dev
```

- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Dev (Chrome/Firefox)**: `npm run dev:chrome` / `npm run dev:firefox`

Load the extension from the `dist/chrome` or `dist/firefox` folder in your browser.



---

## Contributing
```ts
const { data: syncSettings, promise } = useBrowserSyncStorage("settings", {
  theme: "dark",
  notifications: true,
  preferences: { language: "en", fontSize: 14 },
})

const { data: userProfile } = useBrowserLocalStorage("profile", {
  name: "John Doe",
  lastLogin: null,
  favorites: ["item1", "item2"],
})

console.log(syncSettings.value.theme) // 'dark'
console.log(userProfile.value.name) // 'John Doe'
```

---

## 🎨 shadcn-vue Integration

This template includes [shadcn-vue](https://www.shadcn-vue.com/) for additional high-quality, accessible components. The project is pre-configured with:

- **Component Installation**: Use `npx shadcn-vue@latest add <component>` to add components
- **Automatic Integration**: Components work seamlessly with existing Tailwind CSS setup
- **TypeScript Support**: Full type safety for all shadcn-vue components
- **Customizable**: Easy theming and customization through CSS variables

### Example: Adding a Button Component

```bash
npx shadcn-vue@latest add button
```

```vue
<template>
  <Button
    variant="default"
    size="sm"
    @click="handleClick"
  >
    Click me
  </Button>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"

function handleClick() {
  console.log("Button clicked!")
}
</script>
```

---

## 🔌 Plugins & Libraries

- **Vite Plugins**: unplugin-vue-router, unplugin-auto-import, unplugin-vue-components, unplugin-icons, unplugin-turbo-console, @intlify/unplugin-vue-i18n
- **Vue Plugins**: Pinia, VueUse, Notivue, Vue-i18n
- **UI**: Nuxt/UI, shadcn-vue, Tailwind CSS 4
- **WebExtension**: webext-bridge, webextension-polyfill
- **Utilities**: Marked (for markdown rendering)
- **Coding Style**: TypeScript, ESLint, Prettier

---

## 📁 Directory Structure

```bash
.
├── dist/                # Built extension files (chrome/firefox)
├── public/              # Static assets (icons, etc.)
├── scripts/             # Build/dev scripts
├── src/                 # Source code
│   ├── assets/          # Global assets
│   ├── background/      # Background scripts
│   ├── components/      # Shared Vue components
│   ├── composables/     # Vue composables (hooks)
│   ├── content-script/  # Content scripts
│   ├── devtools/        # Devtools panel
│   ├── locales/         # i18n files
│   ├── offscreen/       # Offscreen pages
│   ├── stores/          # Pinia stores
│   ├── types/           # TypeScript definitions
│   ├── ui/              # UI pages (popup, options, etc.)
│   └── utils/           # Shared utilities
├── manifest.config.ts   # Base manifest config
├── vite.config.ts       # Base Vite config
├── tailwind.config.cjs  # Tailwind CSS config
└── package.json         # Dependencies & scripts
```

---

## 💡 Coding Style

- TypeScript with strict types
- ESLint & Prettier enforced
- Vue 3 Composition API (`<script setup>`)
- File-based routing and auto-imports

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or new features.

---

## Support

If you find this project useful, please consider [supporting the author](https://www.patreon.com/c/mubaidr) and starring ⭐ the repository.
