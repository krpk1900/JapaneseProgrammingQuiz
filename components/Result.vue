<template>
  <v-dialog v-model="isShowDialog" width="520" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card cyan darken-1 white--text">
        <div class="question text-h6 text-md-h4 font-weight-black">第
          <span class="text-h4 text-md-h2 font-weight-black">{{ questionNumber }}</span>問 / 12問{{ this.$store.state.score }}点
        </div>


        <v-card-actions>
          <v-btn class="btn btn-left light-blue lighten-1 white--text text-h6 text-md-h4 font-weight-black" :disabled="isShowAnswer"
          @click="isShowAnswer = true; incrementScore()" elevation="2">分かった！</v-btn>
          <v-btn class="btn btn-right red lighten-2 white--text text-h6 text-md-h4 font-weight-black" :disabled="isShowAnswer"
          @click="isShowAnswer = true" elevation="2">分からない</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="btn btn-next cyan white--text text-h6 text-md-h4 font-weight-black" :disabled="!isShowAnswer"
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
    }
  },
  methods: {
  },
  props: {
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
