<template>
  <div class="about">
        <h1>About our Bakery!</h1>
        <div class="container">
            <div class="row">
                <div class="col item-text">
                    <h2>Our Journey</h1>
                    <p class="about-text">We started as a small family owned bakery in the foothills of Provo in 1908.
                    We worked tirelessly to bring you the best bakery products in the valley. We have since
                    grown into the largest chain of bakeries in Utah due to your support and love.</p>
                </div>
              </div>
              <div class="row">
                <div class="col item-text">
                    <h2>Our Mission</h2>
                    <p class="about-text">We strive every single day to bring you the best breads and deserts that remind you
                    good times and family gatherings. We will not stop until every person is satisfied and has experienced
                    the amazing food we have created. We know that you will neve regret stopping in at The Little Bakery!</pclass="about-text">
                </div>
              </div>
              <div class="row">
                <div class="col item-text">
                    <h2>Our Promise to You</h3>
                    <p class="about-text">We will ensure only have the best of experiences while at our bakery. And that you will love
                    everything you taste! We intend to keep our promises to you and all of our customers!</p>
                </div>
              </div>
              <div class="row">
                <div class="col item-text">
                    <h2>Our Guarentee</h4>
                    <p class="about-text">We guarentee 100% fresh and regional ingredients in all our products. Not to mention 100% satisfaction!
                    Come soon and often for the best bakery experience in all of Utah! We are excited for you visit.</p>
                </div>
            </div>
        </div>
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}
form {
  display: table;
  width: 100%;
}
i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}
input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>