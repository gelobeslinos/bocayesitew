<template>
  <div class="page">
    <div class="wide-card">
      <h2>Dangal Greetings 👋</h2>

      <div class="info">
        <span><strong>Name:</strong> Melvern M. Bocayes</span>
        <span><strong>Section:</strong> 4IT-E</span>
        <span><strong>Course:</strong> ITEW 6 – Web Development Frameworks</span>
      </div>

      <p class="description">
        A web development framework is a collection of libraries, tools, and
        conventions that help developers build web applications faster and more
        efficiently. It provides a structured foundation so you don’t have to
        reinvent common functionality every time you build a site or app — like
        routing, data handling, UI components, and more.
      </p>

      <ul>
        <li>Front-end (user interfaces that run in the browser)</li>
        <li>Back-end (server-side code and APIs)</li>
        <li>Full-stack (front-end + back-end together)</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.page {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f1f5f9;
}

.wide-card {
  max-width: 900px;
  width: 100%;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border-radius: 14px;
  padding: 2rem 2.5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

h2 {
  font-size: 1.6rem;
  color: #0f172a;
  margin-bottom: 1rem;
}

.info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  color: #334155;
}

.description {
  line-height: 1.6;
  color: #475569;
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.2rem;
  color: #1e293b;
}

li {
  margin-bottom: 0.4rem;
}
</style>
