import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import Mainscreen from './mainscreen.vue'
import { generateLevel } from './levelGeneration'
import AuditMain from './auditMain.vue'

//@ts-ignore
import Fail from './fail.vue'
//@ts-ignore
import Win from './win.vue'

export const useGameState = defineStore('gameState', () => {

  const diff = ref(0)
  const strikes = ref(0)
  const scene = shallowRef(Mainscreen)

  const pageIndex = ref(0)
  const peekLeft = ref(1)
  const level = computed(() => generateLevel(diff.value))

  function startGame() {
    diff.value = 0
    strikes.value = 0
    pageIndex.value = 0
    peekLeft.value = 1
    scene.value = AuditMain
  }
  function advanceLevel(isUserLegit: boolean) {
      console.log(isUserLegit, level.value.isLegit)
    if (isUserLegit != level.value.isLegit) {
      strikes.value++
      if (strikes.value == 3) {
        scene.value = Fail
        return
      }
    }
    diff.value++
    pageIndex.value = 0
    peekLeft.value = 1
    scene.value = AuditMain

    if (diff.value == 15) {
      scene.value = Win
    }
  }

  return {
    diff,
    strikes,
    scene,
    level,
    pageIndex,
    peekLeft,

    startGame,
    advanceLevel
  }
})
