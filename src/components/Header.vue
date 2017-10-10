<template>
  <div class="page-header">
    <div class="container">
      <span class="logo">ADMIN</span>
      <ul class="navi">
        <li><router-link :to="{ name: 'signIn' }">Users</router-link></li>
        <li><router-link :to="{ name: 'signIn' }">Articles</router-link></li>
        <li><router-link :to="{ name: 'signIn' }">Settings</router-link></li>
      </ul>
      <ul class="navi navi-profile">
        <li><router-link :to="{ name: 'signIn' }">My profile</router-link></li>
        <li><router-link :to="{ name: 'signIn' }">Log Out</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@media screen and (min-width: 1024px) {
  $pageHeaderHeight: 64px;
  body {
    margin-top: $pageHeaderHeight;
  }
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $pageHeaderHeight;
    background: #262626;

    .container {
      padding: 0;
    }

    a {
      color: #fff;

      &:hover {
        color: #ccc;
      }
    }
  }

  .logo {
    display: inline-block;
    font-size: 24px;
    vertical-align: middle;
    color: #fff;
    padding: 8px 12px;
    border: 1px solid #fff;
  }

  .navi {
    &.navi-profile {
      position: absolute;
      top: 0;
      right: 0;
    }

    display: inline-block;
    vertical-align: middle;

    li {
      list-style: none;
      float: left;
      a {
        display: block;
        line-height: 64px;
        padding: 0 18px;
      }
    }
  }
}
</style>

