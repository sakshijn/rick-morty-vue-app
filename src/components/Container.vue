<template>
  <div class="container-fluid" role="main">
    <div class="row">
      <div class="col-sm-3">
        <h3>Filters</h3>
        <filters
          :species="specie"
          :genders="gender"
          @updateGenderFilter="filterGender = $event"
          @updateSpecieFilter="filterSpecies= $event"
        ></filters>
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <search
              :onChange="updateFilter"
              :sort="sort"
              @onSort="sortById($event)"
            ></search>
          </div>
          <div class="col-sm-12">
            <character
              :items="filteredItems"
            ></character>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filter from "./Filters.vue";
import Character from "./Character.vue";
import Search from "./Search.vue";

export default {
  props: {
    msg: String
  },
  data: function() {
    return {
      error: null,
      isLoaded: false,
      items: [],
      specie: [],
      gender: [],
      filterName: "",
      filterGender: [],
      filterSpecies: [],
      sort: "asc",
      filteredItems: this.items
    };
  },
  methods: {
    updateFilter(event) {
      this.filterName = event.target.value;
    },
    sortById(order) {
      let filteredList =
        order === "asc"
          ? this.items.sort((a, b) => (a.id > b.id ? 1 : -1))
          : this.items.sort((a, b) => (a.id < b.id ? 1 : -1));
      this.filteredItems = filteredList || this.items;
    }
  },
  components: {
    character: Character,
    search: Search,
    filters: Filter
  },
  watch: {
    filterGender() {
      this.filteredItems = this.items.filter(item => this.filterGender.length > 0 ? this.filterGender.includes(item.gender) : item);
    },
    filterSpecies() {
      this.filteredItems = this.items.filter(item => this.filterSpecies.length > 0 ? this.filterSpecies.includes(item.species) : item);
    },
    filterName() {
      this.filteredItems = this.items.filter(item =>
        item.name.toLowerCase().includes(this.filterName.toLowerCase())
      );
    }
  },
  mounted() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(
        result => {
          this.isLoaded = true;
          this.items = result.results;
          this.specie = result.results
            .map(item => item.species)
            .filter((x, i, a) => a.indexOf(x) === i);
          this.filterSpecies = this.specie;
          this.gender = result.results
            .map(item => item.gender)
            .filter((x, i, a) => a.indexOf(x) === i);
          this.filterGender = this.gender;
        },
        error => {
          this.isLoaded = true;
          this.error = error;
        }
      );
  }
};
</script>
