const CONTEXT_KEY = "PATATA";

export function usePatataStore(namespace) {
  const store = inject(CONTEXT_KEY);

  if (store.value[namespace] === undefined) {
    store.value[namespace] = ref({});
  }

  return store.value[namespace];
}
