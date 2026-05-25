<script setup>
import ErrorBoundary from './components/ErrorBoundary.vue'
// Function to handle the smooth scroll back to the top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100"
  >
    <header
      class="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200"
    >
      <div
        class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <router-link
          to="/"
          class="group flex items-center gap-3"
        >
          <span
            class="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600"
          >
            Articles
          </span>
        </router-link>
      </div>
    </header>

    <main class="flex-grow max-w-5xl mx-auto px-6 py-12 w-full">
      <router-view v-slot="{ Component }">
        <ErrorBoundary>
          <Suspense>
            <template #default>
              <div class="w-full">
                <component :is="Component" />
              </div>
            </template>

            <template #fallback>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div
                  v-for="n in 4"
                  :key="n"
                  class="h-64 bg-slate-200 rounded-2xl animate-pulse"
                ></div>
              </div>
            </template>
          </Suspense>
        </ErrorBoundary>
      </router-view>
    </main>

    <footer class="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div
        class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-sm font-medium">
          &copy; {{ new Date().getFullYear() }} Mark Francis. All rights
          reserved.
        </p>
        <div
          class="flex items-center gap-8 text-sm font-semibold tracking-wide"
        >
          <router-link
            to="/"
            class="hover:text-white transition-colors"
            >HOME</router-link
          >
          <button
            @click="scrollToTop"
            class="hover:text-white transition-colors flex items-center gap-1 uppercase"
          >
            Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>
