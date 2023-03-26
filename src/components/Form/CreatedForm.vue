<template>
  <form>
    <div class="form-container">
      <div class="form-input">
        <label class="form-label">Author</label>
        <input type="text" v-model="postData.author" placeholder="Auhtor Name" />
      </div>
      <div class="form-input">
        <label class="form-label">Title</label>
        <input type="text" v-model="postData.title" placeholder="Blog Title" />
      </div>
      <div class="form-input">
        <label class="form-label">Body</label>
        <textarea
          v-model="postData.body"
          type="text"
          rows="5"
          placeholder="insert your body content..."
        ></textarea>
      </div>
      <div class="form-checkbox">
        <label class="label-checkbox">Update</label>
        <input type="checkbox" v-model="isUpdated" @change="updateCheckboxState" />
      </div>
      <button class="btn" @click.prevent="submitForm" :disabled="isLoading">Post</button>
    </div>
  </form>
</template>

<script>
import FormMixins from "../../mixins/formMixins";

export default {
  mixins: [FormMixins],
};
</script>
