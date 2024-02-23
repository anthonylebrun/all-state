const CONTEXT_KEY = "PATATA";

const laPatataPlugin = {
  install(app, _options) {
    const store = ref({});
    app.provide(CONTEXT_KEY, store);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(laPatataPlugin);
});
