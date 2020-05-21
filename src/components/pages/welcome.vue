<template>
  <t-page title="" class="f-text-center">
    <div class="a-img f-logo">
    </div>
    <div>
      <a-button-primary @click="$router.push(ROUTES.about.path)">
        {{ ROUTES.about.label }}
      </a-button-primary>
    </div>
    <div>
      <a-button-secondary @click="$router.push('/whatever')">
        404 Error
      </a-button-secondary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';
import AButtonSecondary from 'atoms/button/secondary';

export default {
  name: 'p-welcome',
  components: {
    AButtonSecondary,
    AButtonPrimary,
    TPage,
  },
};
</script>
