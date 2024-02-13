import defineFeature from "~/utils/defineFeature";

const useFeatureOne = defineFeature("featureOne", (state) => {
  state.counter = 0;

  const increment = () => {
    state.counter = state.counter + 1;
  };

  const decrement = () => {
    state.counter = state.counter - 1;
  };

  return {
    increment,
    decrement,
    ...toRefs(state),
  };
});

export default useFeatureOne;
