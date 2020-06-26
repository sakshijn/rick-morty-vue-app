import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        results: [],
        isLoaded: false
    },
    getters: {
        getFilteredItems: state => {
            return state.results;
        }
    },
    mutations: {
        storeItems: (state, { items }) => {
            state.results = items;
          }
    },
    actions: {
        fetchItems: ({commit}) => {
            fetch("https://rickandmortyapi.com/api/character/")
            .then(res => res.json())
            .then(
              result => {
                //commit.isLoaded = true;
                commit('storeItems', {items: result.results});
              },
              error => {
                //this.isLoaded = true;
                console.log(error);
              }
            );
        }
    }
})