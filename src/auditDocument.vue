
<script setup lang="ts">

import AuditMain from './auditMain.vue';
import { useGameState } from './gameStateStore';
import TransactionList from './transactionList.vue';

const state = useGameState()

</script>

<template>
  <div class="w-screen h-screen flex flex-col p-4 gap-4">
    <div class="bg-gray-400 flex-1 rounded-xl p-4">
      <div class="w-full grid grid-rows-[1fr_auto] h-14 items-center mb-4">
        <div class="text-2xl flex items-center justify-between">
          <p class="font-bold"><i class='bx bx-bitcoin'></i> The Word Bank</p>
          <p class="self-end">Text Statement</p>
        </div>
        <div class="bg-black h-0.5"></div>
      </div>
      <TransactionList :list=state.level.audits />
    </div>
    <button
      @click="state.scene = AuditMain"
      class="bg-gray-400 transition-colors hover:bg-gray-500 rounded-xl py-1 px-4 w-50 text-xl">
      close document </button>
  </div>
</template>
