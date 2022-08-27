<template>
  <div class="home">
    <h1>Home</h1>
    <character-sheet-vertical />
  </div>
</template>

<script>
import CharacterSheetVertical from "../components/CharacterSheetVertical.vue";
export default {
  name: "home",
  components: {
    CharacterSheetVertical,
  },
};
</script>
