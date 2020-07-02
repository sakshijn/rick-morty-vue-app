import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        results: [],
        filterCriteria: {
            filterSpecies: [],
            filterGender: []
        },
        filteredResults: []
    },
    getters: {
        filteredItems: state => {
            return state.filteredResults.length > 0 ? state.filteredResults : state.results;
        },
        specie: state => {
            return state.results.map(item => item.species).filter((x, i, a) => a.indexOf(x) === i);
        },
        gender: state => {
            return state.results.map(item => item.gender).filter((x, i, a) => a.indexOf(x) === i);
        }
    },
    mutations: {
        storeItems: (state, { items }) => {
            state.results = items;
        },
        filterGender: (state, { filterGender }) => {
            state.filterCriteria.filterGender = filterGender;
            state.filteredResults = state.results.filter(item => filterGender.length > 0 ?
                state.filterCriteria.filterGender.includes(item.gender) : item);
        },
        filterSpecies: (state, { filterSpecies }) => {
            state.filterCriteria.filterSpecies = filterSpecies;
            state.filteredResults = state.results.filter(item => filterSpecies.length > 0 ?
                state.filterCriteria.filterSpecies.includes(item.species) : item);
        },
        sortItems: (state, { order }) => {
            state.filteredResults =
                order === "asc"
                    ? state.results.sort((a, b) => (a.id > b.id ? 1 : -1))
                    : state.results.sort((a, b) => (a.id < b.id ? 1 : -1));
        },
        filterName: (state, { filterName }) => {
            state.filteredResults = state.results.filter(item =>
                item.name.toLowerCase().includes(filterName.toLowerCase())
            );
        }
    },
    actions: {
        fetchItems: ({ commit }) => {
            fetch("https://rickandmortyapi.com/api/character/")
                .then(res => res.json())
                .then(
                    result => {
                        commit('storeItems', { items: result.results });
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    }
})