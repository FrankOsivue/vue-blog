<script setup>
import { useRoute, useRouter } from 'vue-router'
import { usePosts } from '../composables/usePosts'

const route = useRoute()
const router = useRouter()
const { fetchPostById } = usePosts()

// 1. Grab the ID from the URL (e.g., /post/123 -> id is 123)
const postId = route.params.id

// 2. Fetch the specific post data
const post = await fetchPostById(postId)

// 3. Helper function to format the date nicely
const formatDate = (dateString) => {
  if (!dateString) return 'Unknown Date'
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>

<template>
  <div class="max-w-3xl mx-auto w-full">
    <button
      @click="router.back()"
      class="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-10"
    >
      <span class="transform group-hover:-translate-x-1 transition-transform"
        >&larr;</span
      >
      Back to articles
    </button>

    <article
      v-if="post"
      class="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden"
    >
      <div
        class="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl z-0 pointer-events-none"
      ></div>

      <div class="relative z-10">
        <header class="mb-10 border-b border-slate-100 pb-10">
          <div class="flex items-center gap-3 mb-6 flex-wrap">
            <span
              v-if="post.category"
              class="px-3 py-1 text-xs font-bold tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full uppercase"
            >
              {{ post.category }}
            </span>
            <span class="text-sm font-medium text-slate-500">
              Published {{ formatDate(post.createdAt || post.publishedAt) }}
            </span>
            <span class="text-sm font-medium text-slate-400">&bull;</span>
            <span class="text-sm font-medium text-slate-500">
              {{ post.viewCount || 0 }} views
            </span>
          </div>

          <h1
            class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6"
          >
            {{ post.title }}
          </h1>

          <img
            v-if="post.featuredImage"
            :src="post.featuredImage"
            :alt="post.title"
            class="w-full h-[400px] object-cover rounded-2xl bg-slate-100"
          />
        </header>

        <div
          class="prose prose-slate prose-lg max-w-none text-slate-700 leading-loose whitespace-pre-wrap"
        >
          {{ post.content }}
        </div>

        <div
          v-if="post.tags"
          class="mt-12 pt-8 border-t border-slate-100"
        >
          <h3
            class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4"
          >
            Tags
          </h3>
          <div class="flex gap-2 flex-wrap">
            <span
              v-for="tag in typeof post.tags === 'string'
                ? post.tags.split(',')
                : post.tags"
              :key="tag"
              class="px-3 py-1 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg"
            >
              #{{ tag.trim() }}
            </span>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
