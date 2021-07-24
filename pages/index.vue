<template>
  <div>
    <QuizCard v-if="isShowDialogs1" @next="isShowDialogs2 = true"
    questionNumber="1" questionText="線路上の紅玉" answerText="Ruby on Rails" imageName="rubyonrails.png"></QuizCard>
    <QuizCard v-if="isShowDialogs2" @next="isShowDialogs3 = true"
    questionNumber="2" questionText="碁" answerText="Go" imageName="go.jpeg"></QuizCard>
    <QuizCard v-if="isShowDialogs3" @next="isShowDialogs4 = true"
    questionNumber="3" questionText="絵里www" answerText="elixir (エリクサ)" imageName="elixir.png"></QuizCard>
    <QuizCard v-if="isShowDialogs4" @next="isShowDialogs5 = true"
    questionNumber="4" questionText="古墓流" answerText="COBOL (コボル)" imageName="cobol.png"></QuizCard>
    <QuizCard v-if="isShowDialogs5" @next="isShowDialogs6 = true"
    questionNumber="5" questionText="反応する" answerText="React" imageName="react.png"></QuizCard>
    <QuizCard v-if="isShowDialogs6" @next="isShowDialogs7 = true"
    questionNumber="6" questionText="次" answerText="Next.js" imageName="nextjs.png"></QuizCard>
    <QuizCard v-if="isShowDialogs7" @next="isShowDialogs8 = true"
    questionNumber="7" questionText="炎上してしまった基地" answerText="Firebase" imageName="firebase.png"></QuizCard>
    <QuizCard v-if="isShowDialogs8" @next="isShowDialogs9 = true"
    questionNumber="8" questionText="濃度" answerText="Node.js" imageName="nodejs.png"></QuizCard>
    <QuizCard v-if="isShowDialogs9" @next="isShowDialogs10 = true"
    questionNumber="9" questionText="海言語" answerText="C言語" imageName="c.png"></QuizCard>
    <QuizCard v-if="isShowDialogs10" @next="isShowDialogs11 = true"
    questionNumber="10" questionText="凄価羅" answerText="Scala (スカラ)" imageName="scala.png"></QuizCard>
    <QuizCard v-if="isShowDialogs11" @next="isShowDialogs12 = true"
    questionNumber="11" questionText="凄い記述を作り上げる言語" answerText="HTML (HyperTextMarkupLanguage)" imageName="html.png"></QuizCard>
    <QuizCard v-if="isShowDialogs12" @next="isShowDialogs12 = true"
    questionNumber="12" questionText="乳尊" answerText="Python (パイソン)" imageName="python.png"></QuizCard>
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
