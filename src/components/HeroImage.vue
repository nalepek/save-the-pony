<template>
  <div class="hero-image"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {}
})
export default class HeroImage extends Vue {}
</script>

<style lang="scss">
.hero-image {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(../assets/background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0;
}

.hero-image::after {
  content: "";
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
}
</style>
