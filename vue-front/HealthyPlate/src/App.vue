<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div>
  <header>
      <nav>
        <RouterLink to="/" class="NAVBAR_HOME">Home</RouterLink>
        <RouterLink to="/about" class="NAVBAR">About</RouterLink>
      </nav>
  </header>
</div>
<div></div>
<RouterView />
</template>