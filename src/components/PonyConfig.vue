<template>
  <form id="pony-config-form" @submit.prevent="submitClick">
    <transition-group name="group-fade">
      <transition name="fade">
        <input
          id="config-pony-name"
          name="config-pony-name"
          placeholder="enter your pony name"
          type="text"
          :value="mazeConfig.ponyName"
          @input="change($event, 'ponyName')"
        />
      </transition>
      <transition name="fade">
        <input
          id="config-maze-width"
          name="config-maze-width"
          placeholder="enter maze width"
          type="text"
          number
          :value="mazeConfig.mazeWidth"
          @input="change($event, 'mazeWidth')"
          v-if="visibility >= 1"
        />
      </transition>
      <transition name="fade">
        <input
          id="config-maze-height"
          name="config-maze-height"
          placeholder="enter maze height"
          type="text"
          number
          :value="mazeConfig.mazeHeight"
          @input="change($event, 'mazeHeight')"
          v-if="visibility >= 2"
        />
      </transition>
      <transition name="fade">
        <input
          id="config-difficulty"
          name="config-difficulty"
          placeholder="enter difficulty (optional)"
          type="text"
          number
          :value="mazeConfig.difficulty"
          @input="change($event, 'difficulty')"
          v-if="visibility >= 3"
        />
      </transition>
    </transition-group>

    <button type="submit" class="btn-submit">Create maze</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import { MazeConfig } from "@/models/MazeConfig";
import { MazeConfigVisibility } from "@/models/MazeConfigVisibility";

@Component({
  components: {}
})
export default class PonyConfig extends Vue {
  @Prop(Object)
  private config!: MazeConfig;
  private mazeConfig: MazeConfig;

  private visibility: number = 0;

  constructor() {
    super();

    this.mazeConfig = this.config;
  }

  @Emit("changePonyConfig")
  private change(event: any, key: string) {
    this.mazeConfig[key] = event.target.value;

    if (this.visibility < 4) {
      this.visibility++;
    }
    return this.mazeConfig;
  }

  @Emit("submit")
  private submitClick(event: any) {
    return this.mazeConfig;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.group-fade-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.group-fade-enter, .group-fade-leave-to
/* .group-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.group-fade-leave-active {
  position: absolute;
}
</style>
