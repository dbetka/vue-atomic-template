<template>
  <t-page class="f-m-1 f-p-1">
    <div>Member login</div>
    <div>
      <input
        type="text"
        name="email"
        placeholder="Email"
      >
    </div>
    <div>
      <input
        type="password"
        name="password"
        placeholder="Password"
      >
    </div>
    <div>
      <button
        type="button"
        @click="signIn"
      >
        Login
      </button>
    </div>
  </t-page>
</template>

<script setup lang="ts">
import { ROUTES } from 'config/routes'
import { useRouter } from 'vue-router'
import TPage from 'templates/page.vue'

const router = useRouter()

const signIn = function () {
  router.push(ROUTES.panel)
}
</script>
