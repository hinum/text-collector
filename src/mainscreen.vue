<script setup lang="ts">

import { useGameState } from './gameStateStore';
import Tutorial from './tutorial.vue';
const state = useGameState()

</script>

<template>

  <div class="w-screen h-screen flex flex-col items-center justify-evenly py-[20%]">
    <p class="text-4xl"> game name here </p>
    <button
      class="text-2xl bg-gray-400 hover:bg-gray-500 transition-colors duration-200 p-2 rounded-full w-2/5 flex justify-center"
      @click='state.scene = Tutorial'>
      start game 
    </button>

    <div class="absolute bottom-0 left-8 flex text-8xl items-center group text-gray-800">
      <i class='bx bxs-game' ></i>
      <i class='-translate-x-[40px] translate-y-[20px] group-hover:translate-y-0 transition-all bx bx-clipboard text-7xl'></i>
    </div>
  </div>

</template>
