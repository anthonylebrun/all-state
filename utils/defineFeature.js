import { usePatataStore } from "~/composables/usePatataStore";

export default function defineFeature(namespace, composableFn) {
  return () => {
    const state = usePatataStore(namespace);
    return composableFn(state);
  };
}
