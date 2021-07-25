export const state = () => ({
  score: 0
});

export const mutations = {
  incrementScore(state){
    state.score += 1;
  }
}
