<template>
  <v-dialog v-model="isShowDialog" width="550" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card red darken-4 white--text">
        <div class="question text-h6 text-md-h5 font-weight-black">あなたの点数は
          <span class="text-h4 text-md-h3 font-weight-black">{{ this.$store.state.score }}</span>/10点でした！
        </div>
        <div class="text-center text-h6 text-md-h4 font-weight-bold">
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
    if( this.$store.state.score == 10){
      this.message = "マイキー級エンジニア"
    } else if(8 <= this.$store.state.score && this.$store.state.score <= 9){
      this.message = "ドラケン級エンジニア"
    } else if(5 <= this.$store.state.score && this.$store.state.score <= 7){
      this.message = "パーちん級エンジニア"
    } else if(0 <= this.$store.state.score && this.$store.state.score <= 4){
      this.message = "駆け出しエンジニア級です…"
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
