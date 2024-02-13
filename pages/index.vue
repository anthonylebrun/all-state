<script setup>
import useFeatureOne from "~/composables/features/useFeatureOne";
import useFeatureTwo from "~/composables/features/useFeatureTwo";
import useFeatureThree from "~/composables/features/useFeatureThree";

const { counter, increment, decrement } = useFeatureOne();

const { counterExponent } = useFeatureTwo();

const featureThree = useFeatureThree();
</script>

<template>
  <div>
    <h1>FEATURE ONE</h1>
    {{ counter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h1>FEATURE TWO</h1>
    <p>Counter exponent: {{ counterExponent }}</p>
    <h1>FEATURE THREE</h1>
    <p>Multiplier: {{ featureThree.multiplier }}</p>
    <button @click="featureThree.increment">+</button>
    <button @click="featureThree.decrement">-</button>
    <p>
      Multipled Exponent: {{ counterExponent }} *
      {{ featureThree.multiplier }} = {{ featureThree.multipliedExponent }}
    </p>
  </div>
</template>
