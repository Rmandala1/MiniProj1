<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/QuemSouEu">Quem Sou Eu?</RouterLink>
      <RouterLink class="nav-link" to="/Oquefaço">O que faço?</RouterLink>
      <RouterLink class="nav-link" to="/Hobbies">Hobbies</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer>
    <p>
      <a href="https://www.linkedin.com/in/">
        Todos direitos reservados &copyRogério Mandala 2022;
          <img src="./assets/linkedin.jpg" alt="O meu LinkedIn" width=60 height=40>
       </a>
    </p>
  </footer>
</template>

<style scoped>

</style>
