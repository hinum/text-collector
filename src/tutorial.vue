<script setup lang="ts">
import { useGameState } from './gameStateStore';

const state = useGameState()
</script>

<template>

  <div class="flex w-screen h-screen p-4" @click="state.startGame()">
    <p class="p-4 bg-gray-400 flex-1 rounded-2xl">

      In this game you are tasked with getting rids of all the text evading cirminals.
      You do this by spotting inconsistancy in their text statment and your text exchange logs. <br>
      <br>
      But due to how bad your system is, <span class="font-bold">you can only look at the text statement once.</span>
      You need to only <span class="font-bold">look out for entries which only appear on the text statement.</span><br>
      <br>
      You have 3 strikes. Try to work for 15 days without getting fired.<br>
      GLHF.
      <br><br>
      <span class="italic text-gray-800"> [click to continue] </span>

    </p>
  </div>

</template>
