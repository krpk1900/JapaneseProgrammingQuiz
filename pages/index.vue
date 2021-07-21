<template>
  <v-dialog v-model="isShowDialog" width="510" persistent>
    <template v-slot:activator="{ on, attrs }">
      <a v-bind="attrs" v-on="on" style="color: #099e9e;">　</a>
    </template>
    <v-card>
      test
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    isShowDialog: true,
  })
}
</script>
