<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input
          v-bind:value="title"
          @input="title = $event.target.value"
          class="input"
          type="text"
          placeholder="Название поста"
      >
      <input
          v-bind:value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="Описание поста"
      >
      <button
          class="btn"
          @click="createPost"
      >
        Создать
      </button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'JS', body: 'описание поста'},
        {id: 2, title: 'JS 2', body: 'описание поста 2'},
        {id: 3, title: 'JS 3', body: 'описание поста 3'},
      ],
      title: '',
      body: '',
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}

form {
  display: flex;
  flex-direction: column;

}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
  color: teal;
}
</style>