<template>
  <v-dialog v-model="isShowDialog" width="540" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card cyan darken-1 white--text">
        <div class="question text-h6 text-md-h4 font-weight-black">あなたの点数は
          <span class="text-h4 text-md-h2 font-weight-black">{{ this.$store.state.score }}</span>/12点でした！
        </div>
        <div class="text-center text-h6 font-weight-bold">
          {{ this.message }}
        </div>

        <v-card-actions>
          <v-btn :href="shareMessage()" target="_blank" class="btn light-blue white--text font-weight-bold text-h6" x-large>
            <v-icon style="font-size: 35px; margin-right: 5px;">mdi-twitter</v-icon>Twitterでシェアする
          </v-btn>
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
      message: "デフォルトメッセージ" as string,
    }
  },
  methods: {
    shareMessage():string {
      return `https://twitter.com/share?url=https://perfect-security.jp/%0a&via=krpk1900_dev&related=krpk1900_dev&hashtags=日本人のためのプログラミングクイズ,クソアプリ%0a&text=あなたの点数は${this.$store.state.score}点でした！%0aCTOへの道まではあと${12-this.$store.state.score}点です！%0a`
    },
  },
  props: {
  },
  created: function(){
    console.log(`created`)
    if( this.$store.state.score == 12){
      this.message = "CTOレベルです！"
    } else if(10 <= this.$store.state.score && this.$store.state.score <= 11){
      this.message = "CTOレベルまであと5年はかかるでしょう…"
    } else if(8 <= this.$store.state.score && this.$store.state.score <= 9){
      this.message = "CTOレベルまであと10年はかかるでしょう…"
    } else if(0 <= this.$store.state.score && this.$store.state.score <= 7){
      this.message = "CTOレベルまであと20年はかかるでしょう…"
    }
  }
})
</script>

<style>
.card {
  padding: 10px !important;
}
.btn {
  text-transform: none !important;
  width: 250px;
  height: 60px !important;
  margin: 0 auto;
}
.question {
  text-align: center;
  margin: 5px 0;
}
</style>
