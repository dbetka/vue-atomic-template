<template>
  <t-page :title="ROUTES.about.label" class="f-text-center">
    <p class="f-text-bold">Project</p>
    <p class="f-text-left">
      <span>
        <strong>Vue Atomic Template</strong> is example template for web applications using
        Vue.js and based on Atomic Design.
      </span>
    </p>
    <p class="f-text-bold">Authors</p>
    <div
      v-for="person of creators"
      :key="person.fullName"
      class="f-flex f-pb-1"
    >
      <div v-if="person.photo">
        <img :src="person.photo" alt="person.fullName" width="64" height="64">
      </div>
      <icon-account-circle :size="64" v-else/>
      <div class="f-flex-1 f-pt-1 f-pl-1 f-text-left">
        <div class="f-text-bold">{{ person.fullName }}</div>
        <div class="f-text-14">{{ person.responsibilities }}</div>
        <div class="f-text-14 f-flex">
          <template
            v-for="(link, key) of person.links"
          >
            <span v-if="key === 1" :key="key" class="f-pr-1">,</span>
            <a
              :href="link.path"
              :key="link.path"
              class="a-link"
              target="_blank"
            >
              {{ link.label }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import IconAccountCircle from 'icons/AccountCircle';

export default {
  name: 'p-about',
  components: {
    TPage,
    IconAccountCircle,
  },
  data: () => ({
    showMore: false,
    creators: [
      {
        photo: 'https://media-exp1.licdn.com/dms/image/C4D03AQHIjyVXDRc_Zg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=CA74QtuwKhjbrGYe8nIfIVT_FqTV9zrEVqLDRRBbC5g',
        fullName: 'Dominik Betka',
        responsibilities: 'Front-end developer',
        links: [
          {
            label: 'GitHub',
            path: 'https://github.com/dbetka/',
          },
          {
            label: 'LinkedIn',
            path: 'https://www.linkedin.com/in/dominikbetka/',
          },
        ],
      },
    ],
  }),
};
</script>
