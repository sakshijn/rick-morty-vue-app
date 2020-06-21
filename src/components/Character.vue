<template>
    <div class="row">
          <div v-for="item in items" class="card text-white bg-dark col-6 col-md-3 p-sm-1" :key="item.name">
            <img :src="item.image" class="card-img-top" :alt="item.name"/>
            <div class="card-header text-uppercase">{{item.name}}
              <p>id: {{item.id}}</p>
            </div>
            <div class="card-body">
              <div class="card-text row row-cols-2">
                <div class="col text-uppercase text-left">
                  Status
                      </div>
                <div class="col text-right">{{item.status}}</div>
                <div class="col text-uppercase text-left">
                  Species
                      </div>
                <div class="col text-right">{{item.species}}</div>
                <div class="col text-uppercase text-left">
                  Gender
                      </div>
                <div class="col text-right">{{item.gender}}</div>
                <div class="col text-uppercase text-left">
                  Origin
                      </div>
                <div class="col text-right">{{item.origin.name}}</div>
                <div class="col text-uppercase text-left">
                  Last Location
                      </div>
                <div class="col text-right">{{item.location.name}}</div>
              </div>
            </div>
          </div>
      </div>
</template>

<script>
export default {
    props: {
        items: Array
    }
}
</script>
<style lang="scss" scoped>
.card {
  box-shadow: inset 0px 0px 10px 0px rgba(8, 8, 8, 0.2);
  margin: 10px;
  &-header {
    margin-top: -60px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
}
</style>