<template>
  <li class="col-md-6 col-lg-4 col-xl-3 p-3">
    <a :href="repo.html_url" target="_blank">
      <div
        class="repo p-2 bg-white rounded-3 shadow d-flex flex-column p-4 overflow-hidden"
      >
        <h3 class="fs-4 fw-semibold text-gray-600 text-capitalize">
          {{ nameWithoutDashes }}
        </h3>
        <h4 class="fs-6 fw-semibold font-mono text-primary">
          {{ repo.owner.login }}
        </h4>
        <p
          class="repo-description text-gray-500 fs-7 fw-medium flex-grow-1 pt-3"
        >
          {{ repo.description }}
        </p>
        <p
          v-if="repo.language"
          class="fs-6 fw-bold font-mono pt-3 d-flex align-items-center mb-3 lh-1"
          :style="{ color: language.color }"
        >
          <span class="fs-4 fw-bold me-1">
            <i class="bi" :class="language.icon"></i>
          </span>
          {{ language.name }}
        </p>
        <p class="text-gray-400 fw-medium m-0 fs-6">Updated {{ updatedAgo }}</p>
      </div>
    </a>
  </li>
</template>

<script>
const timeAgo = require("time-ago");
import languages from "@/lib/languages";

export default {
  name: "RepoItem",
  props: ["repo"],
  computed: {
    updatedAgo() {
      return timeAgo.ago(this.repo.pushed_at);
    },
    nameWithoutDashes() {
      return this.repo.name.replace(/(-|_)/g, " ");
    },
    language() {
      const defaultLanguage = languages.find(
        (lang) => lang.name === "_default"
      );

      let language = languages.find((lang) => lang.name === this.repo.language);

      if (!language) {
        language = {
          name: this.repo.language,
          icon: defaultLanguage.icon,
          color: defaultLanguage.color,
        };
      }

      return language;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;

  .repo {
    position: relative;
    height: 18rem;
    transition: 120ms ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }

    &-description {
      position: relative;
      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5rem;
        left: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent, white);
      }
    }
  }
}
</style>
