<template>
  <div>
    <h1>Coooooooookkkiiieeeesss</h1>
    <div class="container-fluid text-size">
      <div class="row">
        <div class="col item">
          <img src="../../images/chocoloate_chip_cookie.jpg" />
          <p>Chocolate Chip Cookies</p>
        </div>
        <div class="col item">
          <img src="../../images/gingerbread_cookies.jpeg" />
          <p>Gingerbread Cookies</p>
        </div>
        <div class="col item">
          <img src="../../images/mm_cookies.jpeg" />
          <p>M&M Cookies</p>
        </div>
      </div>
      <div class="row">
        <div class="col item">
          <img src="../../images/smores_cookies.jpeg" />
          <p>S'mores Cookies</p>
        </div>
        <div class="col item">
          <img src="../../images/twix_cookies.jpeg" />
          <p>Twix Cookies</p>
        </div>
        <div class="col item">
          <img src="../../images/ultra_gooey_choco_chips.jpeg" />
          <p>Ultra Gooey Chocolate Chip Cookies</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  border: 2px solid #f18904;
  padding: 10px;
  color: white;
  background-color: #f49f05;
  font-family: "Bangers", cursive;
  text-align: center;
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
.item {
  border: 2px solid #f18904;
  text-align: center;
  margin: 20px;
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
</style>
