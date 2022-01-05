export const state = () => ({
  score: 0
});

export const mutations = {
  incrementScore(state){
    state.score += 1;
  },
  resetScore(state){
    state.score = 0;
  }
}
