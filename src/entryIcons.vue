<script setup lang="ts">

const { type } = defineProps<{ type: number }>()

</script>

<template>

  <i v-if="type==0" class="text-amber-800 bx bxs-dog text-xl"></i>
  <i v-if="type==1" class="text-blue-800 bx bxs-baby-carriage text-xl"></i>
  <i v-if="type==2" class="text-green-800 bx bxs-hard-hat text-xl"></i>
  <i v-if="type==3" class="text-pink-700 bx bxs-message-square-dots text-xl"></i>
  <i v-if="type==4" class="text-purple-800 bx bxs-circle text-xl"></i>
  <i v-if="type==5" class="text-red-800 bx bxs-baseball text-xl"></i>

</template>
