<template>
  <div class="navigation">
    <ul class="nav">
      <router-link to="/" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Login</a></router-link>
      <router-link to="/home" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Home</a></router-link>
      <router-link to="/user" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">User</a></router-link>
    </ul>
  </div>
</template>
<style scoped>
  .navigation{
    background: #efefef;
    margin: 30px 0 26px 0;
  }
  .navigation ul li a{
    color:#000;
    font-weight: 500;
  }
  .navigation ul li a:hover{
    color:#007bff;
  }
</style>