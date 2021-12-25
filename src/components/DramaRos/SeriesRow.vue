<template>
  <div class="item">
    <div class="table-cell align-middle">
      <div class="flex items-center tb1">
        <CollapseBox class="c1" :type="data.collapseType" @ck="onAction" />
        <div class="c2">{{ data.title_id }}</div>
        <div class="c3">
          {{ data.title_name }}
        </div>
      </div>
    </div>
    <div class="table-cell align-middle c4">{{ data.content_type }}</div>
    <div class="table-cell align-middle c5">{{ season }}</div>
    <div class="table-cell align-middle c6">
      {{ episode }}
    </div>
    <div class="table-cell align-middle c7">
      {{ data.publish_timestampStr }}
    </div>
    <div class="table-cell align-middle c8">
      <div class="flex items-center">
        <Switch :off="data.switchOff" @ck="onSwitch" />
        <span class="padding-16">{{ switchStr }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { dateFormatByKey } from '../../tools/tools.js'
import CollapseBox from './box/CollapseBox.vue'
import Switch from './ui/Switch.vue'
import { SWITCH_STR } from '../../controller/switchController.js'
export default {
  name: 'SeriesRow',
  components: { CollapseBox, Switch },
  props: ['data'],
  data() {
    return {}
  },
  computed: {
    season() {
      return this.data?.content_type === 'Series'
        ? this.data.seasons?.length
        : '--'
    },
    episode() {
      return this.data?.content_type === 'Series'
        ? this.data.episode_count
        : '--'
    },
    isMovie() {
      return this.data?.content_type === 'Movie'
    },
    switchStr() {
      return this.isMovie ? SWITCH_STR.SINGLE_MOVIE : this.data.switchStr || ''
    },
  },
  methods: {
    onAction() {
      this.$emit('collapse', this.data)
    },
    onSwitch() {
      this.$emit('switch', { series: this.data })
    },
  },
  created() {
    dateFormatByKey(this.data)
  },
}
</script>
<style scoped>
.item {
  height: 48px;
  display: table-row;
  background: #fff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
  padding: 0 4px;
}
.item:hover {
  background: rgba(78, 160, 221, 0.1);
}
.tb1 {
  width: 340px;
}
.c1 {
  width: 32px;
  height: 48px;
}
.c2 {
  width: 56px;
  font-weight: normal;
  color: #494948;
}
.c3 {
  max-width: 256px;
  font-weight: 500;
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
  min-width: 126px;
}
.padding-16 {
  padding-left: 16px;
}
</style>
