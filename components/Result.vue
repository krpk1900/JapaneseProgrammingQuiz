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
          <v-btn class="btn btn-left red lighten-2 white--text subtitle-1 text-md-h5 font-weight-black" @click="restart(); resetScore()" elevation="2">はじめから</v-btn>
          <v-btn :href="shareMessage()" target="_blank" class="btn btn-right light-blue white--text font-weight-bold text-body-2 text-md-h6" x-large>
            <v-icon class="twitter-icon">mdi-twitter</v-icon>Twitterでシェア
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
      message: "マイキー級エンジニア" as string,
      imageName: "maiki.png" as string,
    }
  },
  methods: {
    shareMessage():string {
      return `https://twitter.com/share?url=https://programming-quiz.com/%0a&via=krpk1900_dev&related=krpk1900_dev&hashtags=Webエンジニアのくせに解けねぇ奴いる,クソアプリ%0a&text=【Webエンジニアなら解けるクイズ】%0aあなたの点数は${this.$store.state.score}/10点でした！%0a${this.message}%0a`
    },
    restart():void {
      this.isShowDialog = false;
      this.$emit('restart')
    },
    resetScore():void {
      console.log(`resetScore()`)
      this.$store.commit('resetScore');
    }
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

<style scoped>
@media screen and (max-width: 480px) {
  .btn {
    text-transform: none !important;
    width: 140px;
    height: 50px !important;
    margin: 10px auto;
  }
  .twitter-icon {
    font-size: 20px;
    margin-right: 3px;
  }
}
@media screen and (min-width: 481px) {
  .btn {
    text-transform: none !important;
    width: 220px;
    height: 60px !important;
    margin: 10px auto;
  }
  .twitter-icon {
    font-size: 35px;
    margin-right: 5px;
  }
}
.card {
  padding: 10px !important;
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
