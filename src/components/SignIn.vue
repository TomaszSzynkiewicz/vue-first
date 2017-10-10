<template>
  <div class="tiny-form content">
    <h1>SignIn</h1>
    <div class="row">
      <input
        type="text"
        placeholder="Email / login"
        v-model="userData.email"
      />
    </div>
    <div class="row">
      <input
        type="password"
        placeholder="Password"
        v-model="userData.password"
      />
    </div>
    <div class="row">
      <button
        class="btn"
        @click.prevent="signIn(userData)"
        :disabled="!formValid"
      >Login</button>
    </div>
    <p class="small">Don't have an account? <router-link :to="{ name: 'signIn' }">Register</router-link></p>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';
export default {
  data() {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  watch: {
    user(newValue) {
      if (newValue) {
        this.$router.replace({ name: 'users' });
      }
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user
    }),
    formValid() {
      return this.userData.email && this.userData.password;
    }
  },
  methods: {
    ...mapActions('user', [
      'signIn'
    ])
  }
}
</script>
