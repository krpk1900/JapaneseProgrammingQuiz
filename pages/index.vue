<template>
  <QuizCard v-if="isShowDialogs1"
  questionNumber="11" questionText="凄い記述を作り上げる言語" answerText="HTML" imageName="html.png"></QuizCard>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return{
      isShowDialogs1: true as boolean,
    }
  },
})
</script>

<style>
</style>
