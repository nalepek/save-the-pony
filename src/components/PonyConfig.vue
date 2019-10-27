<template>
  <form id="pony-config-form" @submit.prevent="createMaze">
    <input
      id="config-pony-name"
      name="config-pony-name"
      placeholder="enter your pony name"
      type="text"
      :value="mazeConfig.ponyName"
      @input="change($event, 'ponyName')"
    />

    <input
      id="config-maze-width"
      name="config-maze-width"
      placeholder="enter maze width"
      type="number"
      :value="mazeConfig.mazeWidth"
      @input="change($event, 'mazeWidth')"
    />

    <input
      id="config-maze-height"
      name="config-maze-height"
      placeholder="enter maze height"
      type="number"
      :value="mazeConfig.mazeHeight"
      @input="change($event, 'mazeHeight')"
    />

    <input
      id="config-difficulty"
      name="config-difficulty"
      placeholder="enter difficulty"
      type="number"
      :value="mazeConfig.difficulty"
      @input="change($event, 'difficulty')"
    />

    <button type="submit" class="btn-submit">Create maze</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import { MazeConfig } from '@/models/MazeConfig';

@Component({
  components: {}
})
export default class PonyConfig extends Vue {
  public $refs!: {
    ponyName: HTMLInputElement;
    difficulty: HTMLInputElement;
    mazeWidth: HTMLInputElement;
    mazeHeight: HTMLInputElement;
  };

  @Prop(Object)
  private config!: MazeConfig;

  private mazeConfig: MazeConfig;

  constructor() {
    super();

    this.mazeConfig = this.config;
  }

  @Emit('changePonyConfig')
  private change(event: any, key: string) {
    this.mazeConfig[key] = event.target.value;

    return this.mazeConfig;
  }

  private createMaze() {
    console.log('create maze');
  }
  // @Emit('chan')
  // private change(conf: any) {
  //   console.log('difficulty: ' + this.$refs.difficulty.value);
  //   console.log('ponyName: ' + this.$refs.ponyName.value);

  //   console.log('mazeWidth: ' + this.$refs.mazeWidth.value);
  //   console.log('mazeHeight: ' + this.$refs.mazeHeight.value);
  // }
}
</script>

<style lang="scss" scoped>
input {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 250px;
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  height: 30px;
  border: 0;
  background: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  transition: box-shadow 0.3s ease-out;

  @media (min-width: 1024px) {
    font-weight: 400;
  }
}

input:focus {
  outline: none;
  box-shadow: 0 10px 20px -8px rgba(255, 255, 255, 0.3);
}

input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
</style>
