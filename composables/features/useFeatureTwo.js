import defineFeature from "~/utils/defineFeature";
import useFeatureOne from "~/composables/features/useFeatureOne";

const useFeatureTwo = defineFeature("featureTwo", () => {
  const { counter } = useFeatureOne();

  const counterExponent = computed(() => {
    return counter.value * counter.value;
  });

  return {
    counterExponent,
  };
});

export default useFeatureTwo;
