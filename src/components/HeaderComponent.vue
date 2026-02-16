<template>
  <header class="header">
    <h1>Student Info App</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/students">Students</RouterLink>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #e685e6;
  color: white;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  margin-left: 1rem;
  color: #e2e8f0;
  font-weight: bold;
}

nav a.router-link-active {
  text-decoration: underline;
}
</style>
