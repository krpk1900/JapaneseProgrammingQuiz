<template>
  <v-dialog v-model="isShowDialog" width="560" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card red darken-4 white--text">
        <div class="question text-h6 text-md-h5 font-weight-black">あなたの点数は
          <span class="text-h4 text-md-h2 font-weight-black">{{ this.$store.state.score }}</span>/10点でした！
        </div>
        <div class="img">
          <img :src="this.imageName" height="350px">
        </div>
        <div class="text-caption black--text" style="text-align : center;">Ⓒ和久井健・講談社／<br>アニメ「東京リベンジャーズ」製作委員会</div>
        <div class="text-center text-h6 text-md-h4 font-weight-bold" style="margin-top: 10px;">
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
      imageName: "maiki.png" as string,
    }
  },
  methods: {
    shareMessage():string {
      return `https://twitter.com/share?url=https://programming-quiz.com/%0a&via=krpk1900_dev&related=krpk1900_dev&hashtags=Webエンジニアのくせに解けねぇ奴いる,いねえよなぁ,プログラミングなぞなぞ,クソアプリ%0a&text=あなたの点数は${this.$store.state.score}点でした！%0a${this.message}%0a`
    },
  },
  props: {
  },
  created: function(){
    console.log(`created`)
    if(9 <= this.$store.state.score && this.$store.state.score <= 10){
      this.message = "マイキー級エンジニア"
      this.imageName = "maiki.png"
    } else if(7 <= this.$store.state.score && this.$store.state.score <= 8){
      this.message = "ドラケン級エンジニア"
      this.imageName = "doraken.png"
    } else if(5 <= this.$store.state.score && this.$store.state.score <= 6){
      this.message = "パーちん級エンジニア"
      this.imageName = "pachin.png"
    } else if(0 <= this.$store.state.score && this.$store.state.score <= 4){
      this.message = "パーのダチ級エンジニア"
      this.imageName = "dachi.jpg"
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
  margin: 10px auto;
}
.question {
  text-align: center;
  margin: 5px 0;
}
.img {
  text-align : center;
  margin: 20px 0 5px 0;
}
</style>
