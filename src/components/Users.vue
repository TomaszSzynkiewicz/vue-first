<template>
  <div class="content">
    <h1>Users</h1>
    <hr />
    <app-users-list :list="usersList" />
  </div>
</template>

<script>
import UsersList from './UsersList.vue';
import {
  mapState,
  mapActions
} from 'vuex';
export default {
  components: {
    appUsersList: UsersList
  },
  watch: {
    list(newValue, oldValue) {
      if (oldValue !== null && newValue !== oldValue) {
        this.$router.push({ name: 'signIn' });
      }
    }
  },
  computed: {
    ...mapState('user', {
      usersList: state => state.list
    })
  },
  methods: {
    ...mapActions('user', [
      'getList'
    ])
  },
  created() {
    this.getList();
  }
}
</script>
