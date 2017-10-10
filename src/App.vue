<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style lang="scss">
* { padding: 0; margin: 0; box-sizing: border-box; outline: 0; }

html {
  font-size: 16px;
  font-family: Arial, sans-serif;
}

body {
  background: #f4f4f4;
  color: #666;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
  padding: 24px;
}

.content {
  border: 1px solid #eee;
  background: #fff;
  padding: 24px;
}

.small {
  font-size: .8rem;
}

h1,
h2,
h3 {
  font-weight: 400;
  padding: 0 0 12px;
}

a {
  cursor: pointer;
  color: #111;
  text-decoration: none;

  &:hover {
    color: #7BAAF7;
  }
}

.tiny-form {
  width: 320px;
  margin: 24px auto;
  text-align: center;
}

.row {
  padding: 12px;
}

input,
textarea,
select {
  font-size: 16px;
  font-family: Arial, sans-serif;
}

input[type=text],
input[type=password] {
  line-height: 42px;
  padding: 0 12px;
  border: 1px solid #ddd;
  background: #fff;
  display: block;
  width: 100%;

  &:focus {
    border-color:  #7BAAF7;
  }
}

.btn {
  cursor: pointer;
  line-height: 36px;
  padding: 0 24px;
  text-transform: uppercase;
  background: #7BAAF7;
  border: 1px solid #7BAAF7;
  color: #fff;

  &:disabled {
    background: #aaa;
    border-color: #aaa;
  }
}
</style>
