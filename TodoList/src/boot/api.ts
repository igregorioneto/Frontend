import { defineStore } from 'pinia';
import axios from 'axios';

export const useApiStore = defineStore({
  id: 'api',
  state: () => ({
    posts: [],
    loading: false,
  }),
  actions: {
    async fetchPosts() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      } finally {
        this.loading = false;
      }
    }
  },
});