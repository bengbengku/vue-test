<template>
  <h4 class="data-count">count data: {{ $store.state.posts.length }}</h4>
  <div class="card-container scrollbar">
    <p v-if="loading" style="text-align: center; margin: 0 auto">Fetching data...</p>
    <div v-else class="card" v-for="post in posts" :key="post.id">
      <h4>{{ post.title.toUpperCase() }}</h4>
      <p>{{ post.body }}</p>

      <div class="card-footer">
        <span>Author: {{ post.author }}</span>
        <span @click="getPost(post.id)">✏️ Edit</span>
        <span @click="deletePost(post.id)">❌ Hapus</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    posts() {
      let data = this.$store.state.posts;
      return data.sort((a, b) => b.id - a.id);
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    getPost(id) {
      this.$store.dispatch("getPostId", id);
      this.$store.dispatch("isUpdatedCheckbox", true);
    },
    async deletePost(id) {
      try {
        await axios.delete(`https://641bf7ab1f5d999a446de7c2.mockapi.io/api/v1/blogs/${id}`);
        this.$store.dispatch("getPosts");
      } catch (error) {
        console.log(error.responese.data.message);
      }
    },
  },
};
</script>

<style scoped src="./card-style.css"></style>
