<template>
  <SearchForm />

  <FadeTransition>
    <LoadingPanel v-if="loading" text="Loading..." />
    <ErrorPanel v-else-if="error" :error="error" />
    <ReposList v-else-if="repos" :repos="repos" />
  </FadeTransition>
</template>

<script>
import { mapState } from "vuex";
import FadeTransition from "@/components/Transitions/FadeTransition.vue";
import SearchForm from "./SearchForm.vue";
import ErrorPanel from "./ErrorPanel.vue";
import LoadingPanel from "./LoadingPanel.vue";
import ReposList from "./Repos/ReposList.vue";

export default {
  name: "Home",
  components: {
    SearchForm,
    ErrorPanel,
    LoadingPanel,
    FadeTransition,
    ReposList,
  },
  computed: {
    ...mapState(["error", "loading", "repos"]),
  },
};
</script>
