const CONTEXT_KEY = "globalStore";

export function provideStore() {
  const store = ref({});
  provide(CONTEXT_KEY, store);
}

export function useNamespacedStore(namespace) {
  const store = useGlobalStore();

  if (store.value[namespace] === undefined) {
    store.value[namespace] = ref({});
  }

  return store.value[namespace];
}

export function useGlobalStore() {
  return inject(CONTEXT_KEY);
}
