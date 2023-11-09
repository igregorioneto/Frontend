<template>
    <div>
      <q-table
        :rows="posts"
        :columns="columns"
        row-key="id"
      />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ApiPanelComponent',
    data() {
      return {
        posts: [],
        columns: [
          { name: 'id', required: true, label: 'ID', align: 'left', field: 'id', sortable: true },
          { name: 'title', required: true, label: 'Title', align: 'left', field: 'title', sortable: true },
          { name: 'body', required: true, label: 'Body', align: 'left', field: 'body', sortable: true },
        ],
      };
    },
    async created() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.posts = response.data;
    },
  };
  </script>