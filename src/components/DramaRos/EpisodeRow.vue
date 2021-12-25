<template>
  <div class="item">
    <div class="table-cell align-middle">
      <div class="flex items-center tb1">
        <LineBox2 class="c1" :type="episodeData.lineBox2Type" />
        <LineBox class="c2" :type="episodeData.lineBoxType" v-bind="$attrs" />
        <div class="c2-id">
          {{ episodeData.episode_id }}
        </div>
        <div class="c3">
          {{ episodeData.episode_name }}
        </div>
      </div>
    </div>
    <div class="table-cell align-middle c4">Episode</div>
    <div class="table-cell align-middle c5">--</div>
    <div class="table-cell align-middle c6">
      EP{{ episodeData.episode_number }}
    </div>
    <div class="table-cell align-middle c7">--</div>
    <div class="table-cell align-middle c8">
      <div class="flex items-center">
        <Switch :off="episodeData.switchOff" @ck="onSwitch" />
        <span class="padding-16">{{ switchStr }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import LineBox from './box/LineBox.vue'
import LineBox2 from './box/LineBox2.vue'
import Switch from './ui/Switch.vue'
import { SWITCH_STR } from '../../controller/switchController.js'
export default {
  name: 'EpisodeRow',
  components: { LineBox, LineBox2, Switch },
  props: ['episodeData'],
  data() {
    return {}
  },
  computed: {
    switchStr() {
      return SWITCH_STR.PER_EPISODE
    },
  },
  methods: {
    onSwitch() {
      this.$emit('switch', { episode: this.episodeData })
    },
  },
}
</script>
<style scoped>
.item {
  height: 48px;
  display: table-row;
  background: #fff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
}
.item:hover {
  background: rgba(78, 160, 221, 0.1);
  border: 5px solid #fff;
}
.tb1 {
  width: 480px;
}
.c1 {
  height: 48px;
  width: 40px;
}
.c2 {
  height: 48px;
  width: 48px;
}
.c2-id {
  width: 56px;
}
.c3 {
  max-width: 336px;
}
.c4 {
  max-width: 72px;
}
.c5 {
  max-width: 48px;
}
.c6 {
  max-width: 56px;
}
.c8 {
  max-width: 160px;
}
.padding-16 {
  padding-left: 16px;
}
</style>
