<script setup>
import { computed } from 'vue'
import { usePosts } from '../composables/usePosts'

const { fetchPosts } = usePosts()
const response = await fetchPosts()

// Force the limit to 10 items strictly on the frontend
const posts = computed(() => response.slice(0, 10))
</script>

<template>
  <div class="w-full">
    <div class="mb-16 md:mt-8 text-center md:text-left">
      <p class="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
        Learn what is happening in the world of tech today...
      </p>
    </div>
    <section
      v-if="posts && posts.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <article
        v-for="post in posts"
        :key="post.id"
        class="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 relative overflow-hidden"
      >
        <div
          class="absolute -right-12 -top-12 w-40 h-40 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors duration-500 z-0"
        ></div>

        <div class="relative z-10">
          <div class="mb-5">
            <span
              class="inline-block px-3 py-1 text-xs font-bold tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full uppercase"
            >
              Article
            </span>
          </div>

          <router-link
            :to="`/post/${post.id}`"
            class="block outline-none"
          >
            <h2
              class="text-2xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-indigo-600 transition-colors"
            >
              {{ post.title }}
            </h2>
          </router-link>

          <p class="text-slate-600 leading-relaxed line-clamp-3 mb-8">
            {{
              post.excerpt ||
              post.content ||
              'Read this article to explore the topic further.'
            }}
          </p>
        </div>

        <div class="relative z-10 mt-auto pt-5 border-t border-slate-100">
          <router-link
            :to="`/post/${post.id}`"
            class="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300 w-fit"
          >
            Read Article &rarr;
          </router-link>
        </div>
      </article>
    </section>

    <section
      v-else
      class="py-20 text-center"
    >
      <h2 class="text-2xl font-bold text-slate-800 mb-2">No articles found</h2>
      <p class="text-slate-500">Check back later for new content.</p>
    </section>
  </div>
</template>
