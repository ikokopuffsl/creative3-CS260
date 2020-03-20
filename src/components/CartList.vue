<template>
<div class="wrapper">
  
  <div class="products">
    <div class="product" v-for="product in this.$root.$data.cart" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button @click="removeFromCart(product)" class="auto">Remove from Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  //props: {
  //  cartList: Array
 // },
methods: {
    removeFromCart(product) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(product), 1);
      var loc = window.location.pathname;
      console.log(loc.substring(0, loc))
      /*var num = product;
      debugger
      if(num > 1){
        this.$root.$data.cart = this.$root.$data.cart.set(product[0],product[1] - 1);
      }
      else{
        this.$root.$data.cart.delete(product[0]);
      }*/
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid rgb(212, 212, 200);
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: rgb(212, 212, 200);
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>