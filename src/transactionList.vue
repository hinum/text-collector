<script setup lang="ts">
import EntryIcons from './entryIcons.vue';
import type { Transection } from './levelGeneration';

const { list } = defineProps<{
  list: Transection[]
}>()

</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <div class="grid grid-cols-[auto_auto_32px_1fr] gap-2 items-center" v-for="item in list">
      <EntryIcons :type=item.sender />
      <i class='bx bxs-chevrons-right text-lg' ></i>
      <EntryIcons :type=item.reciver />
      <p> {{item.value}} </p>

    </div>
  </div>
</template>
