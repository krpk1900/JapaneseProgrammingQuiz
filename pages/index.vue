<template>
  <div>
    <QuizCard v-if="isShowDialogs1" @next="isShowDialogs2 = true"
    questionNumber="1" questionText="線路上の紅玉" answerText="Ruby on Rails" imageName="rubyonrails.png"></QuizCard>
    <QuizCard v-if="isShowDialogs2" @next="isShowDialogs3 = true"
    questionNumber="2" questionText="碁" answerText="Go" imageName="go.jpeg"></QuizCard>
    <QuizCard v-if="isShowDialogs3" @next="isShowDialogs4 = true"
    questionNumber="3" questionText="絵里www" answerText="elixir (エリクサー)" imageName="elixir.png"></QuizCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return{
      isShowDialogs1: true as boolean,
      isShowDialogs2: false as boolean,
      isShowDialogs3: false as boolean,
      isShowDialogs4: false as boolean,
      isShowDialogs5: false as boolean,
      isShowDialogs6: false as boolean,
      isShowDialogs7: false as boolean,
      isShowDialogs8: false as boolean,
      isShowDialogs9: false as boolean,
      isShowDialogs10: false as boolean,
      isShowDialogs11: false as boolean,
      isShowDialogs12: false as boolean,
    }
  },
})
</script>

<style>
</style>
