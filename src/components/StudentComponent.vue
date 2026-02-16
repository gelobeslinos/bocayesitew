<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p><strong>Course:</strong> {{ course }}</p>
    <p><strong>Year:</strong> {{ year }}</p>

    <button @click="toggleDetails">
      {{ showDetails ? 'Hide' : 'Show' }} Details
    </button>

    <p v-if="showDetails" class="details">
      Student is currently enrolled.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  course: String,
  year: Number
})

const showDetails = ref(false)

function toggleDetails() {
  showDetails.value = !showDetails.value
}
</script>

<style scoped>
.card {
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border-radius: 10px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
}

h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #0f172a;
}

p {
  margin: 0.25rem 0;
  color: #334155;
  font-size: 0.95rem;
}

button {
  margin-top: 0.75rem;
  padding: 0.45rem 1rem;
  border: none;
  background-color: #c5069c;
  color: rgb(255, 255, 255);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

button:hover {
  background-color: #ee11b7;
}

button:active {
  transform: scale(0.96);
}

.details {
  margin-top: 0.6rem;
  padding-top: 0.5rem;
  border-top: 1px solid #5471ac;
  font-size: 0.85rem;
  color: #475569;
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
