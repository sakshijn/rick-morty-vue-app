<template>
  <div class="container-fluid" role="main">
    <div class="row">
      <div class="col-sm-3">
        <h3>Filters</h3>
        <filters
          :species="specie"
          :genders="gender"
          @updateGenderFilter="filterByGender($event)"
          @updateSpecieFilter="filterBySpecie($event)"
        ></filters>
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <search :onChange="filterByName" :sort="sort" @onSort="sortById($event)"></search>
          </div>
          <div class="col-sm-12">
            <character :items="filteredItems"></character>
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
import { mapGetters } from "vuex";

export default {
  props: {
    msg: String
  },
  data: function() {
    return {
      sort: "asc"
    };
  },
  methods: {
    sortById(order) {
      this.$store.commit("sortItems", { order });
    },
    filterByGender(event) {
      this.$store.commit("filterGender", { filterGender: event });
    },
    filterBySpecie(event) {
      this.$store.commit("filterSpecies", { filterSpecies: event });
    },
    filterByName() {
      this.$store.commit("filterName", { filterName: event.target.value });
    }
  },
  components: {
    character: Character,
    search: Search,
    filters: Filter
  },
  created() {
    this.$store.dispatch("fetchItems");
  },
  computed: {
    ...mapGetters(["filteredItems", "specie", "gender"])
  }
};
</script>
