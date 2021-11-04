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
           <b-button pill variant="success" style=" background: #8BAC3E; border-style: none;">Daftar Sekarang</b-button>
           <b-button pill variant="light" style="margin-left:3%">About Us</b-button>
        </div>
    </div>

    <div class="col-md-6 mx-auto d-block"  style="padding-buttom: 40px ">
    <div id="m-po">
        <div id="m-po1" class="mx-auto d-block pmk">
        <img src="../assets/makanan.png" class=" mx-auto d-block border-circle" style="padding: 40px "/>
        </div>
        <div id ="m-po2" class=" align-items-end p-box" style="margin-bottom:30% ">
          <div class="row">
        <div class="col-2 mx-auto">
        <img src="../assets/makanan.png" style="padding: 9px " class=" d-block img"/>
         </div>
           <div class="col-10 " style="padding-left:50px">
           <div style="padding:5px">
            <h5 id="title-right" >Green Salad Tomato</h5>
            <h6 class="card-subtitle mb-2  text-muted">Tomato</h6>
            <div class="row ml-1">
            <img src="../assets/rating.png" alt="">
            <img src="../assets/rating.png" alt="">
            <img src="../assets/rating.png" alt="">
            <img src="../assets/rating.png" alt="">
            </div>
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
    <!-- Footer -->
     <Footer/>
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
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Receipt,
    Trending,
    Footer
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
#title-right{
margin-top:10px;
width: 144px;
height: 29px;
left: 796px;
top: 515px;

/* Heading/H7-Xxsmall */

font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 22px;
/* or 157% */

color: #000000;
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
#m-po1{
    z-index: 1;
}
#m-po2{
background: rgba(255, 255, 255, 0.74);
box-shadow: 0px 11px 39px rgba(0, 0, 0, 0.07);
backdrop-filter: blur(60px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 17px;
top: 370px;
z-index: 2;
width: 292px;
height: 93px;
}
#boxtiga{
    width: 175px;
    left: 75px;
    top: 100px;
    background-color:blue;
    z-index: 3;
}
#boxempat{
    width: 100px;
    left: 200px;
    top: 50px;
    background-color:grey;
    z-index: 2;
}
#boxlima{
    width: 100px;
    left: 250px;
    top: 0px;
    background-color:cyan;
    z-index: 1;
}
#m-po{
    position: absolute;
}
</style>
