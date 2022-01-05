<template>
  <div class="background">
    <LandingPage v-if="isShowLandingPage" @start="isShowDialogs1 = true"></LandingPage>

    <QuizCard v-if="isShowDialogs1" @next="isShowDialogs2 = true"
    questionNumber="1" questionText="線路上の紅玉" answerText="Ruby on Rails" imageName="rails_black.png"></QuizCard>
    <QuizCard v-if="isShowDialogs2" @next="isShowDialogs3 = true"
    questionNumber="2" questionText="濃度" answerText="Node.js" imageName="nodejs.png"></QuizCard>
    <QuizCard v-if="isShowDialogs3" @next="isShowDialogs4 = true"
    questionNumber="3" questionText="🐤" answerText="Kotlin（コトリン）" imageName="kotlin.png"></QuizCard>
    <QuizCard v-if="isShowDialogs4" @next="isShowDialogs5 = true"
    questionNumber="4" questionText="古墓流" answerText="COBOL (コボル)" imageName="cobol.png"></QuizCard>
    <QuizCard v-if="isShowDialogs5" @next="isShowDialogs6 = true"
    questionNumber="5" questionText="ぬるぽ酢" answerText="GAS（ガス）" imageName="gas.png"></QuizCard>
    <QuizCard v-if="isShowDialogs6" @next="isShowDialogs7 = true"
    questionNumber="6" questionText="海言語" answerText="C言語（シー言語）" imageName="c.png"></QuizCard>
    <QuizCard v-if="isShowDialogs7" @next="isShowDialogs8 = true"
    questionNumber="7" questionText="放送禁止 🏩 放送禁止" answerText="PHP（ピーエイチピー）" imageName="php.png"></QuizCard>
    <QuizCard v-if="isShowDialogs8" @next="isShowDialogs9 = true"
    questionNumber="8" questionText="絵里www" answerText="elixir (エリクサ)" imageName="elixir.png"></QuizCard>
    <QuizCard v-if="isShowDialogs9" @next="isShowDialogs10 = true"
    questionNumber="9" questionText="炎上した基地" answerText="Firebase" imageName="firebase.png"></QuizCard>
    <QuizCard v-if="isShowDialogs10" @next="reset(); isShowResult = true"
    questionNumber="10" questionText="乳尊" answerText="Python (パイソン)" imageName="python.png"></QuizCard>
    <Result v-if="isShowResult" @restart="receive()"></Result>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return{
      isShowLandingPage: true as boolean,
      isShowDialogs1: false as boolean,
      isShowDialogs2: false as boolean,
      isShowDialogs3: false as boolean,
      isShowDialogs4: false as boolean,
      isShowDialogs5: false as boolean,
      isShowDialogs6: false as boolean,
      isShowDialogs7: false as boolean,
      isShowDialogs8: false as boolean,
      isShowDialogs9: false as boolean,
      isShowDialogs10: false as boolean,
      isShowResult: false as boolean,
    }
  },
  methods: {
    reset () {
      //console.log("すべてfalseにリセット")
      this.isShowLandingPage = false;
      this.isShowDialogs1 = false;
      this.isShowDialogs2 = false;
      this.isShowDialogs3 = false;
      this.isShowDialogs4 = false;
      this.isShowDialogs5 = false;
      this.isShowDialogs6 = false;
      this.isShowDialogs7 = false;
      this.isShowDialogs8 = false;
      this.isShowDialogs9 = false;
      this.isShowDialogs10 = false;
      this.isShowResult = false;
    },
    receive () {
      //console.log("受け取りました。")
      this.isShowLandingPage = false;
      this.isShowDialogs1 = true;
      this.isShowDialogs2 = false;
      this.isShowDialogs3 = false;
      this.isShowDialogs4 = false;
      this.isShowDialogs5 = false;
      this.isShowDialogs6 = false;
      this.isShowDialogs7 = false;
      this.isShowDialogs8 = false;
      this.isShowDialogs9 = false;
      this.isShowDialogs10 = false;
      this.isShowResult = false;
    },
  }
})
</script>

<style scoped>
  .background{
    height: 100vh;
    background-image: url(/background3.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: #292626;
  }
</style>
