<template>
  <form 
  id="pony-config-form" 
  @submit.prevent="createMaze">
    <input 
    id="config-name" 
    name="config-name" 
    placeholder="enter your pony name"
    :value="config.ponyName" 
    @input="handleChange"
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

  // private mazeConfig: IMazeConfig;

  @Prop(Object) private config!: MazeConfig;

  constructor() {
    super();
    console.log(this);
  }

  private createMaze(e: any) {
    console.log(e);
  }

  //get ponyName() {
    //console.log(this.config);
    //return 'abc';
    //return this.mazeConfig.ponyName;
  //}

  @Emit('input')
  private handleChange(event: any) {
    console.log('hangle change');
    console.log(JSON.parse(JSON.stringify(event)));
    return event.target;
  }

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
</style>
