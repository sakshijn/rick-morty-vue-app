<template>
  <div>
    <div class="filter-species">
      <h4 class="text-left">Species</h4>
      <div class="form-check text-left" v-for="specie in species" :key="specie">
        <input
          class="form-check-input"
          type="checkbox"
          :value="specie"
          name="filterSpecies"
          v-model="filterSpecies"
          @change="onSpecieChange()"
        />
        <label class="form-check-label">{{specie}}</label>
      </div>
    </div>
    <div class="filter-gender">
      <h4 class="text-left">Gender</h4>
      <div class="form-check text-left" v-for="item in genders" :key="item">
        <input
          class="form-check-input"
          type="checkbox"
          :value="item"
          name="filterGender"
          v-model="filterGender"
          @change="onChange()"
        />
        <label class="form-check-label">{{item}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    species: Array,
    genders: Array
  },
  data: function() {
    return {
      filterSpecies: [],
      filterGender: []
    };
  },
  methods: {
    onChange() {
      this.$emit("updateGenderFilter", this.filterGender);
    },
    onSpecieChange() {
      this.$emit("updateSpecieFilter", this.filterSpecies);
    }
  }
};
</script>

<style scoped>
.filter-species, 
.filter-gender {
  border: 1px solid;
  margin-top: 20px;
  padding: 10px;
}
</style>