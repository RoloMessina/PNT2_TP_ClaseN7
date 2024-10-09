<template>
  <div>
    <h1>{{ product.title }}</h1>
    <img :src="product.image" alt="Product image" />
    <p>{{ product.description }}</p>
    <p>{{ product.price }} USD</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {}
    };
  },
  async mounted() {
    const response = await axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`);
    this.product = response.data;
  }
};
</script>
