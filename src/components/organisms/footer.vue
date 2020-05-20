<template>
  <div
    class="o-footer"
  >
    <a-button-icon-footer
      v-for="icon of getIcons()"
      :key="icon.label"
      :icon="icon.component"
      :label="icon.label"
      :size="icon.big ? 48 : 24"
      :icon-class="{ 'f-big': icon.big }"
      :class="{ 'f-big': icon.big, 'f-selected': isActualPath(icon) }"
      @click="onClick(icon)"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import IconMenu from 'icons/Menu.vue';
import IconArrowRight from 'icons/ArrowRight';
import AButtonIconFooter from 'atoms/button/icon-footer';
import { logical } from 'utils/logical';

export default {
  name: 'o-footer',
  components: {
    AButtonIconFooter,
  },
  methods: {
    ...mapMutations('menu', [
      'toggle',
    ]),
    isActualPath ({ path = '' }) {
      if (this.$store.getters['menu/isOpen']) {
        return path === '';
      } else {
        return this.$route.path === path;
      }
    },
    onClick (icon) {
      if (logical.isString(icon.path) && icon.path !== '') {
        this.$router.push(icon.path).catch(() => {
          this.$store.commit('menu/close');
        });
      }
      if (logical.isFunction(icon.method)) {
        icon.method();
      }
    },
    getIcons () {
      return [
        {
          label: 'Menu',
          component: this.$store.getters['menu/isOpen'] ? IconArrowRight : IconMenu,
          method: this.toggle,
        },
      ];
    },
  },
};
</script>
