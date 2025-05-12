<template>
  <div class="card">
    <img :src="`http://localhost:6150/${restaurant.image}`" alt="restaurant image" class="card-image" />
    <h2>{{ restaurant.name }}</h2>
    <p><strong>Cuisine:</strong> {{ restaurant.cuisine }}</p>
    <p><strong>Cost:</strong> {{ restaurant.cost }}</p>
    <p><strong>Rating:</strong> {{ restaurant.rating }}</p>
    <p><strong>Menu:</strong> {{ restaurant.menu.join(', ') }}</p>
    <p><strong>Opening Hours:</strong> {{ restaurant.hours }}</p>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: Object
  }
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.03);
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
}
</style>