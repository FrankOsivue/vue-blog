<template>
  <div
    class="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100"
  >
    <header class="max-w-3xl mx-auto pt-10 pb-6 px-6">
      <router-link
        to="/"
        class="text-3xl font-bold tracking-tighter text-slate-900 hover:text-indigo-600 transition-colors"
      >
        Minimalist.
      </router-link>
    </header>

    <main class="max-w-3xl mx-auto px-6 pb-12">
      <router-view />
    </main>
  </div>
</template>
