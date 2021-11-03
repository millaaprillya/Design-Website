<template>
<div class="receipt">
        <div style="padding-top: 130px" >
          <h6 class="title-receipt">Browser Our Category</h6>
          <h6 class="title1-receipt">Receipt</h6>
        </div>
        <div class="row" style="margin-top:20px">
        <div class="card " style="width: 13rem; height:10rem; background-color:rgba(240, 254, 235, 1)">
            <div class="card-body">
                  <img src="../../assets/cake.png" class=" mx-auto  d-block " style="padding: 1px "/>
            <h5 class="card-title  mb-2 text-center" >Cake</h5>
            <h6 class="card-subtitle mb-2 text-center text-mute">22 items</h6>
        </div>
        </div>
         <div class="card" style="width: 13rem; height:10rem; background-color:#e4f2f3">
            <div class="card-body">
                 <img src="../../assets/pizza.png" class=" mx-auto  d-block " style="padding: 1px "/>
            <h5 class="card-title mb-2 text-center">Pizza</h5>
            <h6 class="card-subtitle mb-2 text-center text-muted">25 items</h6>
        </div>
        </div>
         <div class="card" style="width: 13rem; height:10rem; background-color:rgba(234, 238, 250, 1)">
            <div class="card-body">
                 <img src="../../assets/kebab.png" class=" mx-auto  d-block " style="padding: 1px "/>
            <h5 class="card-title mb-2 text-center">Kebab</h5>
            <h6 class="card-subtitle mb-2 text-center  text-muted">12 items</h6>
        </div>
        </div>
         <div class="card" style="width: 13rem; height:10rem;  background-color:rgba(249, 238, 243, 1)">
            <div class="card-body">
                 <img src="../../assets/salmon.png" class=" mx-auto  d-block " style="padding: 1px "/>
            <h5 class="card-title mb-2 text-center">Salmon</h5>
            <h6 class="card-subtitle mb-2 text-center text-muted">22 items</h6>
        </div>
        </div>
         <div class="card" style="width: 13rem; height:10rem;  background-color:rgba(243, 247, 217, 1)">
            <div class="card-body">
                 <img src="../../assets/dunot.png" class=" mx-auto  d-block " style="padding: 1px "/>
            <h5 class="card-title mb-2 text-center">Donut</h5>
            <h6 class="card-subtitle text-center mb-2 text-muted">11 items</h6>
        </div>
        </div>
        </div>
</div>
</template>
<script>
</script>

<style>
.card:hover {
transform: scale(1.1);
}
.card{
transition: transform 0.2s ease;
box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);
border-radius: 0;
border: 0;
margin-bottom: 1.5em;
margin-left:20px;
border-radius: 100%;
margin-bottom:2%;
}
.card-title {
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
/* identical to box height, or 137% */

text-align: center;

/* Color/Dark */

color: #333333;

}
.title-receipt{
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 38px;
line-height: 50px;
color: #333333;
}
.title1-receipt{
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 38px;
line-height: 50px;
color:#8BAC3E;
}
</style>
