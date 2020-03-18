<template>
<div>
  <CartList :cart="cartGet" />
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  components: {
    CartList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    cartGet() {
      return this.$root.$data.cart;
    }
  },
}
</script>