<template>
  <div class="t-panel">
    <div class="o-content-panel">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 't-panel',
})
</script>
