
<script setup lang="ts">

import AuditDocument from './auditDocument.vue';
import { useGameState } from './gameStateStore';
import TransactionList from './transactionList.vue';

const state = useGameState()

</script>

<template>
  <div class="w-screen h-screen flex flex-col p-4">
    <div class="flex justify-start items-baseline gap-1">
      <button
        :class="{ 'bg-gray-400': state.pageIndex == index }"
        class="w-20 flex p-1.5 justify-center rounded-t-xl"
        @click="state.pageIndex = index"
        v-for="(_, index) in state.level.pages">
        <p> 
          {{ ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][index] }}
        </p>
      </button>
      <div class="flex-1 flex justify-end px-4 text-lg"> <p>day {{ state.diff + 1 }}</p></div>

    </div>
    <div :class="{ 'rounded-tl-xl': state.pageIndex != 0 }" class="bg-gray-400 flex-1 rounded-b-xl p-4 py-6 rounded-tr-xl">
      <TransactionList :list=state.level.pages[state.pageIndex]! />
    </div>
    <div class="bg-grey-400 flex justify-between mt-4">
      <div  class="text-xl">
        <button 
          v-if="state.peekLeft > 0"
          @click="state.scene = AuditDocument; state.peekLeft--"
          class="transition-colors hover:bg-gray-500 w-50 bg-gray-400 rounded-xl py-1 px-4 flex gap-1 items-center">

          <i class='bx bxs-binoculars' v-if="state.peekLeft == 2"></i>
          <i class='bx bxs-binoculars'></i>
          <div class="flex-1 justify-center flex"><p>peek</p></div>
        </button>

        <button 
          v-else
          class="w-50 bg-gray-500 rounded-xl py-1 px-4">
          -- unavalible -- </button>
      </div>

      <div class="text-xl flex items-center gap-2">
        <div :class="{ 'opacity-100': state.strikes > 0 }"
          class="flex bg-gray-400 w-[88px] px-[8px] flex-row-reverse rounded-full text-red-800 text-4xl opacity-0">

          <i :class="{ 'bx bx-x': state.strikes >= 1 }"></i>
          <i :class="{ 'bx bx-x': state.strikes >= 2 }"></i>
        </div>
        <button @click="state.advanceLevel(true)" class="transition-colors hover:bg-green-500 w-35 bg-green-400 py-1 rounded-xl"> approve </button>
        <button @click="state.advanceLevel(false)" class="transition-colors hover:bg-red-500 w-35 bg-red-400 py-1 rounded-xl"> flag </button>
      </div>
    </div>
  </div>
</template>

