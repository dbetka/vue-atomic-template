<template>
  <div :class="isOpen ? 'f-open' : ''" class="o-menu">
    <router-link
      v-for="(route, key) in links"
      :key="key"
      :to="route.path"
      @click.native="close()"
      class="a-link f-menu"
      :class="{ 'f-selected': isActualPath(route) }"
    >
      {{ route.label }}
    </router-link>
    <a class="a-link f-menu" @click="toggleTheme()">
      {{ themeName === THEMES.light ? 'Dark mode' : 'Light mode' }}
    </a>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { ROUTES } from 'utils/macros/routes';

export default {
  name: 'o-menu',
  data: () => ({
    links: [
      ROUTES.welcome,
      ROUTES.about,
    ],
  }),
  computed: {
    ...mapGetters('menu', [
      'isOpen',
    ]),
    themeName () {
      return this.$store.getters['theme/name'];
    },
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
      'close',
    ]),
    isActualPath ({ path = '' }) {
      return this.$route.path === path;
    },
    toggleTheme () {
      this.$store.commit('theme/toggle');
    },
  },
};
</script>
