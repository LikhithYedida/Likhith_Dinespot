<template>
  <div class="container">
    <div class="grid">
      <RestaurantCard
        v-for="(restaurant, index) in restaurants"
        :key="index"
        :restaurant="restaurant"
      />
    </div>
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
    fetch('http://localhost:6150/restaurants')
      .then(response => response.json())
      .then(data => {
        this.restaurants = data;
      })
      .catch(error => console.error('Error fetching restaurants:', error));
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
}

@media (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
