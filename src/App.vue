<template>
  <HeroImage />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HeroImage from '@/components/HeroImage.vue';

@Component({
  components: {
    HeroImage
  },
})

export default class App extends Vue {
  
}
</script>

<style lang="scss">

</style>
