<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and fallback to `fade` -->
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<style lang="scss">
  @import "./assets/styles/main.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>

export default {
  name: 'App',
  components: {
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Ulysse'
    }
  }
}
</script>