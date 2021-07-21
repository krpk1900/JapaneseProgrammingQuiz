<template>
  <v-dialog v-model="isShowDialog" width="510" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card cyan darken-1 white--text">
        <div class="text-h6 text-md-h4 font-weight-black">Q{{ questionNumber }}. {{ questionText }}</div>
        <div>ロゴ</div>
        <v-btn class="btn light-blue lighten-1 white--text text-h4 font-weight-black" elevation="2">分かった！</v-btn>
        <v-btn class="btn red lighten-2 white--text text-h4 font-weight-black" elevation="2">分からない</v-btn>
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
      questionNumber: 1 as number,
      questionText: "凄い記述を作り上げる言語" as string
    }
  }
})
</script>

<style>
.card {
  padding: 10px !important;
}
.btn {
  padding: 30px 15px !important;
}
</style>
