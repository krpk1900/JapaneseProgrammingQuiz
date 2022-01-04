<template>
  <v-dialog v-model="isShowDialog" width="560" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      <div class="card red darken-4 black--text">
        <div class="question text-h6 text-md-h4 font-weight-black">Webエンジニアのくせに<br>解けねぇ奴いる？</div>
        <div class="img">
          <img src="touribe.png" class="touribe">
          <div class="text-caption">Ⓒ和久井健・講談社／<br>アニメ「東京リベンジャーズ」製作委員会</div>
        </div>
        <v-card-actions>
          <v-btn class="btn btn-next grey lighten-5 black--text text-h6 text-md-h4 font-weight-black" width="250px"
          @click="start" elevation="24">全問潰すぞ!!!</v-btn>
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
@media screen and (max-width: 480px) {
  .touribe {
    height: 350px;
    max-width: 310px;
  }
}
@media screen and (min-width: 481px) {
  .touribe {
    height: 400px;
  }
}
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
