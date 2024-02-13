import { useNamespacedStore } from "~/composables/useGlobalStore";

export default function defineFeature(namespace, composableFn) {
  return () => {
    const state = useNamespacedStore(namespace);
    return composableFn(state);
  };
}
