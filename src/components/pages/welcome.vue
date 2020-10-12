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
    <div>
      <m-field correct>
        <a-label>Some some</a-label>
        <a-input
          v-model="some"
        />
        <a-assist>lol lolo lololol</a-assist>
      </m-field>
      <!--      <m-textarea v-model="some" placeholder="Password" assist="Type password" />-->
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import AButtonPrimary from 'atoms/button/primary';
import AButtonSecondary from 'atoms/button/secondary';

export default {
  name: 'p-welcome',
  data: () => ({
    some: 'asd',
  }),
  components: {
    AButtonSecondary,
    AButtonPrimary,
    TPage,
  },
};
</script>

<style>
.a-field.f-better-font {
  color: blue;
}
</style>
