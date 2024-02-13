import defineFeature from "~/utils/defineFeature";
import useFeatureTwo from "~/composables/features/useFeatureTwo";

const useFeatureThree = defineFeature("featureThree", (state) => {
  const { counterExponent } = useFeatureTwo();

  state.multiplier = 1;

  const increment = () => {
    state.multiplier++;
  };

  const decrement = () => {
    state.multiplier--;
  };

  const multipliedExponent = computed(() => {
    return state.multiplier * counterExponent.value;
  });

  return {
    increment,
    decrement,
    ...toRefs(state),
    multipliedExponent,
  };
});

export default useFeatureThree;
