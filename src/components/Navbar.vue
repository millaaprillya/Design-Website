<template>
    <div class="container">
  <navbar class="d-flex flex-wrap justify-content-between align-items-center py-2 my-2 ">
    <p class="col-md-4 mb-0 "> <img src="../assets/logo1.png" id="img-logo" style="margin-right:10px" /></p>

    <a href="/" id="nv-l" class="col-md-5 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
     <ul class="nav ">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Promotions</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Blogs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact Us</a></li>
    </ul>
    </a>

    <ul  class="nav col-md-3 justify-content-end">

      <li id="rl" class="nav-item"><a href="#" class="nav-link px-2 text-muted" style="color: #333333;" >Masuk</a></li>
      <li id="rl2" class="nav-item ml-2"> <b-button pill variant="success" id="login" style =" background: #8BAC3E; border-style: none; ">Daftar Sekarang</b-button></li>
    </ul>
  </navbar>
</div>
</template>
<style scoped>
#login{
color: #FFFFFF;
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
}
.nav-link{
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
}
@media screen and (max-width: 375px) {
#nv-l{
 display: none !important;
}
#img-logo{
  height:50%;
  width:50%;
 padding-right:30px;
}
#rl{
    margin-left:0px;
   display: none !important;
}
#rl2{
  position: relative;
}
}
@media screen and (max-width: 604px) {
  #nv-l{
 display: none !important;
}
#img-logo{
  height:50%;
  width:50%;
 padding-right:30px;
}
#rl{
    margin-left:0px;
   display: none !important;
}
#rl2{
  position: relative;
}
}
</style>
