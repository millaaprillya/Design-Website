<template>
  <div class="home">
  <Navbar/>
  <main>
  <div class="container ">
 <div class="row">
    <div class="col-md-6  bg-white ">
    <div style="padding-top: 130px" >
          <h1 class="title">Good Food Us</h1>
          <h1 class="title"> Good Mood</h1>
          <p class="title-p">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
           <b-button pill variant="success">Daftar Sekarang</b-button>
           <b-button pill variant="light" style="margin-left:3%">About Us</b-button>
        </div>
    </div>

    <div class="col-md-6 mx-auto d-block"  style="padding-buttom: 40px ">
    <div>
        <div class="mx-auto d-block pmk">
        <img src="../assets/makanan.png" class=" mx-auto d-block border-circle" style="padding: 40px "/>
        <div class=" align-items-end p-box" style="margin-bottom:30% ">
          <div class="row">
        <div class="col-2 mx-auto">
        <img src="../assets/makanan.png" class=" d-block img"/>
         </div>
           <div class="col-10">
         <center><h6>adnai</h6></center>
          </div>
         </div>
    </div>
        </div>
    </div>
    </div>
    <!-- receipt -->
    <Receipt/>
    <!-- Trending -->
    <Trending/>
  </div>
  </div>
</main>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Receipt from '../components/base/receipt.vue'
import Trending from '../components/base/trending.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Receipt,
    Trending
  }
}
</script>

<style>
.img{
width: 300%;
height: 100%;

}
.pmk{
position:relative;
}
.home{
  /* background: url('../assets/bg.png'); */
}
.p-box{
position: absolute;
background-color: #757575;
width: 50%;
top:90%;
}
.title{
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 64px;
line-height: 64px;
/* or 100% */

color: #8BAC3E;

}
.title-p{
margin-top:5%;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 29px;
margin-bottom:5%;
/* or 161% */

/* Color/Light1 */

color: #757575;

}
.border-circle{
width: 90%;
height: 100%;
background: #F8F8F8;
border-radius: 100%;
position: relative;
z-index: 1;
}
.uk-gm{
width: 50px;
height: 70px;
}
</style>
