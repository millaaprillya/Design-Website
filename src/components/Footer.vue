<template>
        <div class="container " style="padding-top: 400px; padding-bottom:20px ">
  <footer class="footer" style="padding: 60px; height:350px" >
    <div class="row">
      <div class="col-5  ">
      <img src="../assets/footer.jpg" alt="">
        <p class="text-muted">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan,Daerah Khusus Ibukota Jakarta 12950</p>
          <div class="icon" style="padding: 5px; height:10px" >
          <div class="row align-items-center" >
        <div class="col-3">
       <img src="../assets/email.jpg" alt="">
        </div>
        <div class="col-3">
      <img src="../assets/no.png" alt="">
        </div>
        <div class="col-3">
     <img src="../assets/instagram.png" alt="">
        </div>
         </div>
          </div>
      </div>

      <div class="col-2">
        <h5 class="title-footer">Categories</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link  text-muted">Cupcake</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link  text-muted">Pizza</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link  text-muted">Kebab</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link  text-muted">Salmon</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link  text-muted">Dougnut</a></li>
        </ul>
      </div>

      <div class="col-2">
        <h5 class="title-footer">About Us</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link  text-muted">About Us</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link  text-muted">Faq</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link  text-muted">Report Platform</a></li>
        </ul>
      </div>

      <div class="col-3">
        <form>
          <h5 class="title-footer">Newsletter</h5>
          <p class="text-muted">Get now free 50% discount for alll products on your first order</p>
        <div class="input-group-prepend">
           <input type="text" class="form-control email" id="validationTooltipUsername" placeholder="Your Email Address" aria-describedby="validationTooltipUsernamePrepend" required>
          <span class="input-group-text send" id="validationTooltipUsernamePrepend" style=" background: #8BAC3E; border-style: none; color: #FFFFFF; font-size: 14px;   ">SEND</span>
        </div>
        <div>
      <ul  class="nav flex-column " style="padding-top:20px;">
          <li  ><img src="../assets/email.jpg" alt=""  style="padding-right:15px;"><a class="a-z"> elemesid@gmail.com</a></li>
          <li ><img src="../assets/no.png" alt="" style="padding-right:15px;"><a class="a-z"> 0888 1111 2222 </a></li>
        </ul>
        </div>
        </form>
      </div>
    </div>

  </footer>
    <div class=" mx-auto d-block d-flex justify-content-between py-4 my-4 ">
      <p class ="text-mute jj " style="margin-left:400px">© 2021 Elemes id. All rights reserved</p>
    </div>
</div>
</template>

<style>
.bg-icon{
position: static;
width: 40px;
height: 40px;
left: 0px;
top: 0px;

/* Primary */

background: #8BAC3E;
border-radius: 24px;
}
.email{
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 25px;
/* or 171% */

color: #000000;
}
.send{
width: 60px;
height: 37px;
left: 1193px;
top: 2590px;
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* or 171% */

/* White */

color: #FFFFFF;
background: #8BAC3E;
border-radius: 0px 8px 8px 0px;

}
.footer{
  background: url('../assets/bg_footer.png');
}
.title-footer{
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
/* identical to box height, or 133% */

/* Color/Dark */

color: #333333;
}
.text-muted{
padding-top:8px;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */

/* Color/Light1 */

color: #757575;

}
.bd-placeholder-img {
font-size: 1.125rem;
text-anchor: middle;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;
}
.a-z{
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

color: #000000;
}
@media (min-width: 768px) {
.bd-placeholder-img-lg {
font-size: 3.5rem;
    }
      }
</style>
