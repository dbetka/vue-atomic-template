<template>
  <t-page title="Error 404" class="f-text-center">
    <div class="f-text-48 f-pb-2">
      404
    </div>
    <div>
      Hi! <br>
      This is not the page you're looking for.
    </div>
    <div class="f-pt-1">
      <a-button-primary @click="$router.push(ROUTES.welcome.path)">
        Go to welcome page
      </a-button-primary>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';

export default {
  name: 'p-error',
  components: {
    AButtonPrimary,
    TPage,
  },
};
</script>
