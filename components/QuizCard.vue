<template>
  <v-dialog v-model="isShowDialog" width="520" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card cyan darken-1 white--text">
        <div class="question text-h6 text-md-h4 font-weight-black">第
          <span class="text-h4 text-md-h2 font-weight-black">{{ questionNumber }}</span>問 / 12問
        </div>
        <div class="question text-h6 text-md-h4 font-weight-black">「{{ questionText }}」</div>
        <div class="img">
          <img :src="imageName" height="200px">
        </div>
        <div class="question text-h6 text-md-h4 font-weight-black">「{{ answerText }}」</div>

        <v-card-actions>
          <v-btn class="btn btn-left light-blue lighten-1 white--text text-h6 text-md-h4 font-weight-black" elevation="2">分かった！</v-btn>
          <v-btn class="btn btn-right red lighten-2 white--text text-h6 text-md-h4 font-weight-black" elevation="2">分からない</v-btn>
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
      isShowLogo: false as boolean,
      isShowAnser: false as boolean,
      //questionNumber: 1 as number,
      //questionText: "凄い記述を作り上げる言語" as string
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
    }
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
.question {
  text-align: center;
  margin: 5px 0;
}
.img {
  text-align : center;
  margin: 15px 0 5px 0;
}
</style>
