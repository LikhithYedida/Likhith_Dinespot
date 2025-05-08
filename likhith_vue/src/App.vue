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

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
#app {
  padding: 2rem;
  text-align: center;
}
</style>
