<template>
  <div
    class="flex flex-col items-center justify-center py-20 text-center w-full"
  >
    <h1
      class="text-9xl font-black text-slate-200 mb-2 tracking-tighter select-none"
    >
      404
    </h1>
    <h2 class="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
      Not found
    </h2>
    <p class="text-lg text-slate-600 max-w-md mb-10 leading-relaxed">
      The requested article can not be found
    </p>
    <router-link
      to="/"
      class="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-indigo-600 transition-all duration-300"
    >
      Home &rarr;
    </router-link>
  </div>
</template>
