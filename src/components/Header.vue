<template>
  <div class="page-header">
    <div class="container">
      <span class="logo">ADMIN</span>
      <ul class="navi" v-if="user">
        <li><router-link active-class="active" :to="{ name: 'users' }">Users</router-link></li>
        <li><router-link active-class="active" :to="{ name: 'articles' }">Articles</router-link></li>
        <li><router-link active-class="active" :to="{ name: 'settings' }">Settings</router-link></li>
      </ul>
      <ul class="navi navi-profile" v-if="user">
        <li><router-link active-class="active" :to="{ name: 'profile' }">My profile ({{ user.email }})</router-link></li>
        <li><a @click.prevent="signOut">Log Out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';
export default {
  watch: {
    user(newValue, oldValue) {
      if (oldValue !== null && newValue !== oldValue) {
        this.$router.push({ name: 'signIn' });
      }
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user
    })
  },
  methods: {
    ...mapActions('user', [
      'signOut'
    ])
  }
}
</script>

<style lang="scss">
@media screen {
  .page-header {
    text-align: center;
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

    .logo {
      margin: 24px 0 12px;
      display: inline-block;
      font-size: 24px;
      vertical-align: middle;
      color: #fff;
      padding: 8px 12px;
      border: 1px solid #fff;
      line-height: 24px;
    }

    .navi {
      padding: 12px 0;
      li {
        list-style: none;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  $pageHeaderHeight: 64px;
  body {
    margin-top: $pageHeaderHeight;
  }
  .page-header {
    text-align: left;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $pageHeaderHeight;

    .container {
      height: 100%;
      &:before {
        content: '';
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }

    .logo {
      margin: 0;
    }

    .navi {
      padding: 0 12px;
      &.navi-profile {
        position: absolute;
        top: 0;
        right: 0;
      }

      display: inline-block;
      vertical-align: middle;

      li {
        float: left;
        a {
          display: block;
          line-height: 64px;
          height: 64px;
          padding: 0 18px;

          &.active,
          &:hover {
            color: #7BAAF7;
          }
        }
      }
    }
  }
}
</style>

