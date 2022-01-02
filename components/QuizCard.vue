<template>
  <v-dialog v-model="isShowDialog" width="550" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card red darken-4 white--text">
        <div class="question text-h6 text-md-h4 font-weight-black">第
          <span class="text-h4 text-md-h2 font-weight-black">{{ questionNumber }}</span>問 / 10問
        </div>
        <div class="question text-h6 text-md-h4 font-weight-black">「{{ questionText }}」</div>
        <div v-if="isShowAnswer" class="answer-area">
          <div class="img">
            <img :src="imageName" height="230px">
          </div>
          <div class="answer-text text-h6 text-md-h4 font-weight-black">{{ answerText }}</div>
        </div>
        <div v-else class="img-hatena">
          <img src="hatena.png" height="300px">
        </div>

        <v-card-actions>
          <v-btn class="btn btn-left blue lighten-1 white--text text-h6 text-md-h4 font-weight-black" :disabled="isShowAnswer"
          @click="isShowAnswer = true; incrementScore()" elevation="2">分かった！</v-btn>
          <v-btn class="btn btn-right red lighten-2 white--text text-h6 text-md-h4 font-weight-black" :disabled="isShowAnswer"
          @click="isShowAnswer = true" elevation="2">分からない</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="btn btn-next grey lighten-5 black--text text-h6 text-md-h4 font-weight-black" :disabled="!isShowAnswer"
          @click="nextQuestion" elevation="2">次の問題</v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return{
      isShowDialog: true as boolean,
      isShowAnswer: false as boolean,
    }
  },
  methods: {
    nextQuestion():void {
      this.isShowDialog = false;
      this.$emit('next')
    },
    incrementScore():void {
      console.log(`incrementScore()`)
      this.$store.commit('incrementScore');
    }
  },
  props: {
    questionNumber: {
      type: String,
      default: "0"
    },
    questionText: {
      type: String,
      default: '問題'
    },
    answerText: {
      type: String,
      default: '答え'
    },
    imageName: {
      type: String,
      default: 'error.jpg'
    },
  }
})
</script>

<style>
.card {
  padding: 10px !important;
}
.btn {
  width: 200px;
  height: 60px !important;
}
.btn-left {
  margin: 0 auto 0 15px;
}
.btn-right {
  margin: 0 15px 0 auto;
}
.btn-next {
  margin: 0 auto;
}
.question {
  text-align: center;
  margin: 5px 0;
}
.answer-text {
  text-align: center;
  margin: 5px 0;
}
.img {
  text-align : center;
  margin: 20px 0 5px 0;
}
.img-hatena {
  text-align : center;
  margin: 7px;
}
.arrow {
  font-size: 100px;
}
.answer-area {
  height: 300px;
}
</style>
