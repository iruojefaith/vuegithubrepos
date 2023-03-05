<template>
  <section class="my-5 container">
    <ul v-if="repos.length" class="row p-0">
      <RepoItem
        v-for="repo in recentlyUpdatedRepos"
        :key="repo.id"
        :repo="repo"
      />
    </ul>
    <p
      v-else
      class="text-center fs-4 text-primary-800 bg-white rounded shadow p-5 mt-5"
    >
      This user doesn't have any public repositories...
    </p>
  </section>
</template>

<script>
import RepoItem from "./RepoItem.vue";

export default {
  name: "ReposList",
  props: ["repos"],
  components: { RepoItem },
  computed: {
    recentlyUpdatedRepos() {
      return [...this.repos].sort((a, b) =>
        b.updated_at.localeCompare(a.updated_at)
      );
    },
  },
};
</script>
