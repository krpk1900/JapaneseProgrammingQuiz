<template>
  <v-dialog v-model="isShowDialog" width="570" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card cyan darken-1 white--text">
        <div class="question text-h6 text-md-h4 font-weight-black">日本人のための<br>プログラミングクイズ</div>
        <div class="question text-h6 text-md-h5 font-weight-black">
          英語が苦手な方でもプログラミング言語の<br>名前を覚えられるクイズです！
        </div>

        <v-card-actions>
          <v-btn class="btn btn-next cyan white--text text-h6 text-md-h4 font-weight-black"
          @click="start" elevation="2">スタート</v-btn>
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
    start():void {
      this.isShowDialog = false;
      this.$emit('start')
    },
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
