import axios from "axios";

export async function getBlogPosts() {
  try {
    const { data } = await axios.get("https://641bf7ab1f5d999a446de7c2.mockapi.io/api/v1/blogs");
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
}

export async function getPostById(postId) {
  try {
    const { data } = await axios.get(
      `https://641bf7ab1f5d999a446de7c2.mockapi.io/api/v1/blogs/${postId}`
    );
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
