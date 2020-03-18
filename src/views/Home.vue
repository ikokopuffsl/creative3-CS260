<template>
  <div>
    <h1>Welcome to The Little Bakery</h1>
  </div>
</template>

<script>
//import ProductList from "../components/ProductList.vue"
export default {
  name: 'About',
  components: {
    //ProductList
  },

}
</script>

<style scoped>
  

.active {
  background-color: #36688d;
}

#css2 {
  font-size: 20px;
}

#logo {
  height: 40px;
  width: 40px;
}

.navbar-brand {
  font-family: "Bangers", cursive;
}

h1 {
  border: 2px solid #f18904;
  padding: 10px;
  color: white;
  background-color: #f49f05;
  font-family: "Bangers", cursive;
  text-align: center;
}

p {
  color: #233c67;
  margin: 20px;
  font-size: 20px;
  font-family: "Bangers", cursive;
}
div > p {
  font-size: 35px;
}
.grey-background {
  background-color: grey;
}

#text-center {
  text-align: center;
}

.grid {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
}

.item {
  border: 2px solid #f18904;
  text-align: center;
  margin: 20px;
}
.item-text {
  border: 2px solid #f18904;
  text-align: center;
  padding: 10px;
  font-family: "Bangers", cursive;
}
.about-text {
  font-size: 20px;
}

img {
  height: 400px;
  width: 100%;
  border-bottom: 2px solid #f18904;
}

.col {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

</style>