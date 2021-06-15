<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.3/css/mdb.min.css);

*{
    margin: 0;
    padding: 0;
}

body{
    background-color: #fff;
}

.card-body:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
}

.container2{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100vw;

}

.container3{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 100vw;

}

.rounded1{
    border-radius: 0.8rem;
}

.hm-gradient {
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

.darken-grey-text {
    color: #2E2E2E;
}

.navbar .dropdown-menu a:hover {
    color: #616161 !important;
}

.darken-grey-text {
    color: #2E2E2E;
}

.carousel-item h1
{
color:#fff;
font-size: 20px;
    margin: 75px auto;
    text-align: center;
}
.login-block
{

    width: 50%;
    margin: 0 auto;

}
.signup__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.76);
    background-color: rgba(0, 0, 0, 0.33);
}
.login_sec {

    padding: 0px;
    background-color: #f8fafb;

}
.login_sec img {

    margin: 24px auto;

}
.banner-sec {
    background: url(./assets/banner.jpeg) no-repeat center;
    background-size: cover;
    min-height: 500px;
    border-radius: 0 10px 10px 0;
    padding: 0;
}

.carousel-fade .carousel-item {
    opacity: 0;
    transition-duration: .6s;
    transition-property: opacity;
}

.carousel-indicators {

    bottom: -41px;
}

.carousel-indicators .active {
    background-color: #fff;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
    opacity: 1;
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
    opacity: 0;
}

.carousel-fade .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active,
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-prev {
    transform: translateX(0);
    transform: translate3d(0, 0, 0);
}

.container1 {

-webkit-box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
border-radius: 0.375rem;
margin-bottom: 5%;

}

.carousel-inner {
    border-radius: 0 10px 10px 0;
}

.carousel-caption {
    text-align: left;
    left: 5%;
}

</style>
