import axios from "axios";

export default {
  computed: {
    post() {
      return this.$store.state.post;
    },
    isLoading() {
      return this.loading;
    },
    isUpdated: {
      get() {
        return this.$store.state.isUpdate;
      },
      set(value) {
        this.$store.commit("SET_ISUPDATE_CHECKBOX", value);
      },
    },
  },
  data() {
    return {
      postData: {},
      loading: false,
    };
  },
  watch: {
    post(newData) {
      this.postData = Object.assign(newData);
    },
  },
  methods: {
    async submitForm() {
      if (!this.postData.author || !this.postData.title || !this.postData.body) {
        alert("Please fill the form");
        return;
      }

      const endpointPost = {
        url: "https://641bf7ab1f5d999a446de7c2.mockapi.io/api/v1/blogs",
        action: axios.post,
      };
      const endpointPut = {
        url: `https://641bf7ab1f5d999a446de7c2.mockapi.io/api/v1/blogs/${this.postData.id}`,
        action: axios.put,
      };

      let endpoint = this.isUpdated ? endpointPut : endpointPost;

      try {
        this.loading = true;
        await endpoint.action(endpoint.url, {
          author: this.postData.author,
          title: this.postData.title,
          body: this.postData.body,
        });
        this.$store.dispatch("getPosts");
        this.postData.author = "";
        this.postData.title = "";
        this.postData.body = "";
        this.loading = false;
        this.$store.commit("SET_ISUPDATE_CHECKBOX", false);
      } catch (err) {
        console.log(error.response.data.message);
      }
    },
    updateCheckboxState(e) {
      this.isUpdated = e.target.checked;
    },
  },
};
