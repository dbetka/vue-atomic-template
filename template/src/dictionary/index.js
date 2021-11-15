import { createI18n } from 'vue-i18n';
import { pl } from 'dictionary/language/pl';

const i18n = createI18n({
  locale: 'pl',
  messages: {
    pl,
  },
});

export const translator = i18n.global;
export default i18n;
