<script setup>

import { useGameState } from './gameStateStore';
import Mainscreen from './mainscreen.vue';
const state = useGameState()

</script>

<template>
  <div class="w-screen h-screen flex flex-col items-center justify-evenly py-[20%] text-center">
    <p class="text-4xl"> you failed<br> on day {{ state.diff }} </p>
    <button
      class="text-2xl bg-gray-400 hover:bg-gray-500 transition-colors duration-200 p-2 rounded-full w-2/5 flex justify-center"
      @click='state.scene = Mainscreen'>

      return to menu
    </button>
  </div>
</template>
