<template>
  <div class="navbar" id="myNavbar">
  <router-link to="/">
    <i class="material-icons icons">house</i><br>
     首頁
  </router-link>
  <router-link to="/table">
    <i class="material-icons icons">menu_book</i><br>
    假名表
  </router-link>
  <router-link to="/handwrite">
    <i class="material-icons icons">create</i><br>
    手寫
  </router-link>
  <router-link to="/test">
    <i class="material-icons icons">hiking</i><br>
    測驗
  </router-link>
  <router-link to="/about">
    <i class="material-icons icons">help_center</i><br>
    關於
  </router-link>
</div>
</template>

<script>
export default {
    methods:{
        myFunction() {
            var x = document.getElementById("myNavbar");
            if (x.className === "navbar") {
                x.className += " responsive";
            } else {
                x.className = "navbar";
            }
        }
    },
    mounted(){
        this.myFunction()
    }

}
</script>

<style>
/* Place the navbar at the bottom of the page, and make it stick */
.navbar {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* Style the links inside the navigation bar */
.navbar a {
  /* float: left; */
  display: inline-block; 
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 10px;
  width:20%;
}

/* Change the color of links on hover and clicked*/
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.navbar .router-link-active{
  background-color: #ddd;
  color: black;
}

/* Hide the link that should open and close the navbar on small screens */
.navbar .icon {
  display: none;
}

.icons{
  text-align: center;
}
/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the navbar (.icon) */
@media screen and (max-width: 200px) {
  .navbar a:not(:first-child) {display: none;}
  .navbar a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the navbar with JavaScript when the user clicks on the icon. This class makes the navbar look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 200px) {
  .navbar.responsive a.icon {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>