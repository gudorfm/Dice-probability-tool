<template>
  <div class="home">
    <h1>Home</h1>
    <character-sheet-vertical />
    <bar-chart />
  </div>
</template>

<script>
import CharacterSheetVertical from "../components/CharacterSheetVertical.vue";
import BarChart from "../components/BarChart.vue"
export default {
  name: "home",
  components: {
    CharacterSheetVertical,
    BarChart,
  },
};
</script>
