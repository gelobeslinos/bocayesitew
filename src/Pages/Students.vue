<template>
  <div>
    <h2>Students</h2>

    <p v-if="loading">Loading students...</p>
    <p v-if="error" style="color:red">{{ error }}</p>

    <StudentComponent
      v-for="student in students"
      :key="student.id"
      :name="student.name"
      course="Computer Science"
      :year="3"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StudentComponent from '../components/StudentComponent.vue'

const students = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error('API request failed')
    students.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>
