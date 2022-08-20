export default {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  //Мутации должны быть полностью синхронные {methods}
  mutations: {
    increment(state) {
      state.counter++;
    },
    add(state, payload) {
      //state() , payload (то что приходит из вне)
      state.counter += payload.value;
    },
    incrementAsync() {},
  },
  //Action для работы с async кодом (fetch axios){methods}
  //Action -> Mutation -> State
  actions: {
    incrementAsync({ commit }, payload) {
      // incrementAsync(context, payload) {
      //context -> gettets, state, rootGetters, dispatch, commit
      //commit - вызывает mutations
      //dispatch - вызывает actions в actions
      //gettets -
      //state -
      //   console.log(context);
      console.log(payload);
      setTimeout(() => {
        //mutations -> add()
        // context.commit("add", {
        commit("add", payload);
      }, 150);
    },
  },
  //Получение данных из state то что выводится в шаблон {computed}
  getters: {
    counter(state) {
      if (state.counter > 30) {
        return 0;
      }
      return state.counter;
    },
    doubleCounter(state, getters, rootState, rootGetters) {
      console.log("state:", state);
      console.log("getters:", getters);
      console.log("rootState:", rootState);
      console.log("rootGetters:", rootGetters);
      //getters -> counter() * 2
      return getters.counter * 2;
    },
  },
};
