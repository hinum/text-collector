<script setup>

import AuditMain from './auditMain.vue';
import { useGameState } from './gameStateStore';
const state = useGameState()

</script>

<template>
  <div class="w-screen h-screen flex flex-col items-center justify-evenly py-[20%]">
    <p class="text-4xl"> you have won! <br> want to continue? </p>
    <button
      class="text-2xl bg-gray-400 hover:bg-gray-500 transition-colors duration-200 p-2 rounded-full w-2/5 flex justify-center"
      @click='state.scene = AuditMain'>

      go to endless
    </button>
  </div>
</template>
