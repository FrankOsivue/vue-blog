<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)
const errorMessage = ref('')

onErrorCaptured((err) => {
  hasError.value = true
  errorMessage.value = err.message || 'An unexpected runtime error occurred.'
  // Returning false prevents the error from propagating further up the component tree
  return false
})

const resetSystem = () => {
  hasError.value = false
  errorMessage.value = ''
  window.location.reload()
}
</script>

<template>
  <div
    v-if="hasError"
    class="max-w-2xl mx-auto py-24 text-center"
  >
    <div class="bg-red-50 border border-red-100 rounded-3xl p-12 shadow-sm">
      <h2 class="text-3xl font-extrabold text-red-600 mb-4 tracking-tight">
        Connection Error
      </h2>
      <p class="text-slate-700 text-lg mb-8 leading-relaxed">
        {{ errorMessage }}
      </p>
      <button
        @click="resetSystem"
        class="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all duration-300"
      >
        Reload Application &rarr;
      </button>
    </div>
  </div>
  <slot v-else />
</template>
