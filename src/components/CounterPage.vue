<template>
  <div class="counter-page">
    <h2>Counter View</h2>
    <button @click="counter.increment()">
      Add !!
    </button>
    <span> counter: {{ counter.count }}</span>
    <span> doubler: {{ counter.doubleCount }}</span>
  </div>
</template>

<script lang="ts" setup>
import {useCounterStore} from "@/stores/counter";

const counter = useCounterStore()

</script>


<style lang="scss">
.counter-page {
  display: flex;
  flex-direction: column;
}

</style>