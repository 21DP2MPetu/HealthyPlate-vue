<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div>
  <header>
      <nav class="FLEX_CONTAINER">
        <div class="NAVBAR_CONTAINER_FIRST">
          <RouterLink to="/" class="NAVBAR_HOME">Home</RouterLink>
          <RouterLink to="/about" class="NAVBAR">About</RouterLink>
        </div>
        <div class="NAVBAR_CONTAINER_SECOND">
          <RouterLink to="/login" class="NAVBAR_LOGIN">Login</RouterLink>
          <RouterLink to="/register" class="NAVBAR_LOGIN">Register</RouterLink>
        </div>
      </nav>
  </header>
</div>
<div></div>
<RouterView />
</template>