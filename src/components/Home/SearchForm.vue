<template>
  <section class="mt-4 container">
    <form
      @submit.prevent="handleSubmit"
      class="p-2 bg-white rounded-1 shadow row ms-0 me-0"
      :class="formValidation.status"
      novalidate
    >
      <div class="col-sm-9 col-md-10 d-flex align-items-center">
        <label for="searchbar" class="ps-3 pe-1">
          <span class="fs-4 text-primary">
            <i class="bi bi-search"></i>
          </span>
        </label>
        <input
          id="searchbar"
          type="text"
          name="searchbar"
          class="border-0 shadow-none p-3 w-100 text-dark fw-medium form-control"
          placeholder="Search GitHub username..."
          spellcheck="false"
          v-model.trim="searchText"
          autocomplete="off"
          pattern="\S+"
          required
        />
      </div>
      <button
        class="btn btn-primary text-primary-50 fw-bold shadow-none py-3 col-sm mt-2 mt-sm-0"
        :disabled="loading"
      >
        {{ !loading ? "Find repos" : "Finding..." }}
      </button>
    </form>
  </section>
</template>

<script>
import { mapState } from "vuex";

const STATUSES = {
  NOT_VALIDATED: "needs-validation",
  VALIDATED: "was-validated",
};

export default {
  name: "SearchForm",
  data() {
    return {
      searchText: "",
      formValidation: {
        error: false,
        status: STATUSES.NOT_VALIDATED,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.validateForm();

      if (!this.formValidation.error) {
        this.$store.dispatch("getRepos", {
          username: this.searchText.trim(),
        });

        this.formValidation.status = STATUSES.NOT_VALIDATED;
      }
    },
    validateForm() {
      this.formValidation.status = STATUSES.NOT_VALIDATED;

      if (!this.searchText.trim().length) {
        this.formValidation.error = true;
      } else {
        this.formValidation.error = false;
      }

      this.formValidation.status = STATUSES.VALIDATED;
    },
  },
  computed: {
    ...mapState(["loading"]),
  },
};
</script>
