<template>
  <div id="app">
    <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
  </div>
</template>

<style>
body {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
  background-attachment: fixed;
  background: linear-gradient(to bottom, #F09819, #FF512F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;
  background-repeat: no-repeat;
  overflow: auto;
  /*overflow-y: hidden;*/
  overflow-x: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
