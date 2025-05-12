<template>
  <div id="app">
    <h1>Dine Spot</h1>
    <RestaurantList />
  </div>
</template>

<script>
import RestaurantList from './components/RestaurantList.vue';

export default {
  components: { RestaurantList }
};
</script>
