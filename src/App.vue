<template>
  <div class="wrapper">
    <HeroImage />
    <PonyConfig 
      :config="mazeConfig" 
      @changePonyConfig="handleChangePonyConfig"
      @submit="handleCreateMazeClickBtn"
    />

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HeroImage from '@/components/HeroImage.vue';
import PonyConfig from '@/components/PonyConfig.vue';
import { MazeConfig } from '@/models/MazeConfig';
import { Inject } from 'vue-property-decorator';
import { ponyApiService } from '@/services/PonyApiService';

@Component({
  components: {
    HeroImage,
    PonyConfig
  }
})
export default class App extends Vue {

  private mazeConfig: MazeConfig;

  constructor() {
    super();
    this.mazeConfig = new MazeConfig();
  }

  private handleChangePonyConfig(conf: MazeConfig) {
    this.mazeConfig = conf;
  }

  private handleCreateMazeClickBtn(conf: MazeConfig) {
    this.createMaze();
  }

  private createMaze() {
    ponyApiService.createMaze(this.mazeConfig);
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Monsterrat", sans-serif;
  margin: 0;
  padding: 0;
}

 .wrapper {
    display: -webkit-flex;
    display: -webkit-box;
    display: -moz-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    position: relative;
    padding: 30px;
    width: 100%;
    min-height: 100vh;
    justify-content: center;

    &.flexStart {
      justify-content: flex-start;
    }
  }

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  // border: 1px solid green;
  -webkit-text-fill-color: white;
  //-webkit-box-shadow: 0 0 0px 1000px #000 inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
