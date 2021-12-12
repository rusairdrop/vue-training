<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button
          class="navbar__btn"
          @click="$router.push('/')"
      >
        Главная
      </my-button>
      <my-button
          class="navbar__btn"
          @click="$router.push('/posts')"
      >
        Посты
      </my-button>
      <my-button
          class="navbar__btn"
          @click="$router.push('/store')"
      >
        Store
      </my-button>
      <my-button
          class="navbar__btn"
          @click="$router.push('/about')"
      >
        О сайте
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {}


}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}

.navbar__btn {
  margin-left: 15px;
}
</style>