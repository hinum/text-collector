<script setup lang='ts'>
import { useGameState } from './gameStateStore';

const state = useGameState()

</script>

<template>
  <div class="w-screen h-screen bg-gray-300">
    <component :is=state.scene></component>
  </div>
</template>
