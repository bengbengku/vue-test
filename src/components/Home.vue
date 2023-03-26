<template>
  <div class="container">
    <h1>Simple Blog</h1>
    <div class="blogs_wrapper">
      <div class="col">
        <created-form />
      </div>
      <div class="posts-container">
        <created-card />
      </div>
    </div>
  </div>
</template>

<script>
import CreatedForm from "./Form/CreatedForm.vue";
import CreatedCard from "./Card/CreatedCard.vue";

export default {
  components: {
    CreatedForm,
    CreatedCard,
  },
};
</script>

<style src="./home-style.css"></style>
