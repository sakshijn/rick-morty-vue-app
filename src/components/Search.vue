<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 form-group">
      <label for="searchInputName">Search by name:</label>
      <input
        type="text"
        class="form-control"
        id="searchInputName"
        placeholder="Name"
        name="filterName"
        @change="onChange($event)"
      />
    </div>
    <div class="col-sm-12 col-md-6 form-group">
      <label for="sortInputId">Sort By Id:</label>
      <select
        class="form-control"
        id="sortInputId"
        name="sort"
        :value="sort"
        @change="onSort($event)"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onChange: Function,
    sort: String
  },
  methods: {
    onSort(e) {
      this.$emit("onSort", e.target.value);
    }
  }
};
</script>
<style scoped>
input {
  display: inline-block;
  max-width: 78%;
}
</style>