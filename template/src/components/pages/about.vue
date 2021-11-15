<template>
  <t-page
    class="f-flex"
    style="align-items: stretch;"
  >
    <div class="o-menu">
      <div class="f-mb-1 f-bold">
        Menu
      </div>
      <div
        v-for="route of links"
        :key="route.name"
        class="a-button f-menu"
        @click="goTo(route)"
      >
        <a-icon :name="route.icon" />
        {{ route.shortLabel }}
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
    <o-map />
  </t-page>
</template>

<script setup lang="ts">
import OMap from 'organisms/map.vue'
import { ROUTES } from 'config/routes'
import type { Route, Routes } from 'models/router'
import { useIcons } from '@dbetka/vue-material-icons'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import TPage from 'templates/page.vue'

const icons = useIcons()
const links = computed<Routes>(() => [
  ROUTES.panel.child.settings,
  ROUTES.panel.child.assets,
  ROUTES.panel.child.geofencing,
  ROUTES.panel.child.sharing,
  ROUTES.tutorial,
  {
    ...ROUTES.welcome,
    shortLabel: 'Sign out',
    icon: icons.names.logout,
  },
])

const router = useRouter()

function goTo (route: Route) {
  if (router.currentRoute.value.path === route.path) {
    router.push(ROUTES.panel.path)
  } else {
    router.push(route.path)
  }
}
</script>
