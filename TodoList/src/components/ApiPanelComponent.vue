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
  import { useApiStore } from '../boot/api';
  
  export default {
    name: 'ApiPanelComponent',
    data() {
      return {
        columns: [
          { name: 'id', required: true, label: 'ID', align: 'left', field: 'id', sortable: true },
          { name: 'title', required: true, label: 'Title', align: 'left', field: 'title', sortable: true },
          { name: 'body', required: true, label: 'Body', align: 'left', field: 'body', sortable: true },
        ],
      };
    },
    setup () {
        const apiStore = useApiStore();

        apiStore.fetchPosts();

        return {
            posts: apiStore.posts,
            loading: apiStore.loading,
        };
        
    }
  };
  </script>