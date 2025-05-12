<template>
  <div class="restaurant-list">
    <RestaurantCard
      v-for="(restaurant, index) in restaurants"
      :key="index"
      :restaurant="restaurant"
    />
  </div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';

export default {
  components: { RestaurantCard },
  data() {
    return {
      restaurants: []
    };
  },
  mounted() {
  const baseURL =
    window.location.hostname === 'localhost'
      ? 'http://localhost:6150/api'
      : 'https://likhith-dinespot.onrender.com/api';

  fetch(baseURL)
    .then(response => response.json())
    .then(data => {
      this.restaurants = data;
    })
    .catch(error => console.error('Error fetching restaurants:', error));
}
};
</script>

<style scoped>
.restaurant-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
</style>