<template>
  <v-dialog v-model="isShowDialog" width="520" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card cyan darken-1 white--text">
        <div class="question text-h6 text-md-h4 font-weight-black">あなたの点数は
          <span class="text-h4 text-md-h2 font-weight-black">{{ this.$store.state.score }}</span>/12点
        </div>
        <div>
          {{ level }}レベルです！
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
      level: "デフォルト" as string,
    }
  },
  methods: {
    shareMessage():string {
      return `https://twitter.com/share?url=https://perfect-security.jp/%0a&via=krpk1900_dev&related=krpk1900_dev&hashtags=世界一セキュリティが堅牢なアプリ,クソアプリ%0a&text=あなたは【世界一堅牢なセキュリティ】を突破した【】人目の凄腕ハッカーです！%0a`
    },
  },
  props: {
  },
  created: function(){
    console.log(`created`)
    switch(this.$store.state.score){
      case 12:
        console.log(`12点`)
        break;
      case 11:
        console.log(`11点`)
        break;
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
