<template>
  <ul class="user-list">
    <li
      v-for="(user, i) in list"
      :key="i"
    >
      <div class="profile-photo" style="background-image: url(http://www.earlham.ac.uk/sites/default/files/images/profiles/Nicola%20Patron/profile-placeholder.jpg)"></div>
      <div class="user-details">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }} | Lucky number: {{ user.luckyNumber }}</p>
      </div>
      <button class="btn">Edit</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang="scss" scoped>
.user-list {
  margin: 24px 0;
  li {
    background: #f4f4f4;
    list-style: none;
    padding: 12px 24px;
    position: relative;

    &:nth-child(even) {
      background: #eaeaea;
    }

    .btn {
      position: absolute;
      right: 24px;
      top: 50%;
      margin-top: -18px;
    }
  }
}

.profile-photo {
  display: inline-block;
  vertical-align: middle;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.user-details {
  vertical-align: middle;
  display: inline-block;
  padding: 0 24px;
  h3 {
    padding: 0;
  }

  p {
    color: #999;
    padding: 0;
  }
}
</style>


