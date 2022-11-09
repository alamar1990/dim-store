<script setup lang="ts">
</script>

<template>
  <div>
    <router-link to="/">
      HOME
    </router-link>
    <router-link to="/">
      TEST
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
&:hover {
   filter: drop-shadow(0 0 2em #646cffaa);
 }
}
.logo.vue {
&:hover {
   filter: drop-shadow(0 0 2em #42b883aa);
 }
}

</style>
