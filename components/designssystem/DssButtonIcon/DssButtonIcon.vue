<script setup></script>
<template>
  <button
    ref="trigger"
    class="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full"
    :class="{ 'bg-slate-200': false }"
    aria-haspopup="true"
  >
    <span class="sr-only">Info</span>
    <svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        class="fill-current text-slate-500 dark:text-slate-400"
        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
      />
    </svg>
  </button>
</template>
