<template>
  <div>
    <QuizCard v-if="isShowDialogs1" @next="isShowDialogs2 = true"
    questionNumber="1" questionText="線路上の紅玉" answerText="Ruby on Rails" imageName="rubyonrails.png"></QuizCard>
    <QuizCard v-if="isShowDialogs2" @next="isShowDialogs3 = true"
    questionNumber="2" questionText="碁" answerText="Go" imageName="go.jpeg"></QuizCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return{
      isShowDialogs1: true as boolean,
      isShowDialogs2: false as boolean,
    }
  },
})
</script>

<style>
</style>
