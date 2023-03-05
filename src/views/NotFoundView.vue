<template>
  <Layout>
    <section class="container">
      <article class="text-center text-gray-600">
        <h2 class="display-1 fw-bold">404</h2>
        <h3 class="display-3 fw-medium">Page not found</h3>
        <router-link :to="{ name: 'home' }">
          <span class="btn btn-secondary fs-4 fw-medium mt-4">
            Back to home
          </span>
        </router-link>
      </article>
    </section>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";

export default {
  name: "NotFoundView",
  components: { Layout },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 10rem;
}
</style>
