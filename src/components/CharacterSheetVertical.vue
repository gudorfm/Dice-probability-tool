<template>
  <div class="home">
    <table class="table table-striped table-hover">
      <!--<thead>
        <tr>
          <th scope="col">Strength</th>
          <th scope="col">Dexterity</th>
          <th scope="col">Constitution</th>
          <th scope="col">Intelligence</th>
          <th scope="col">Wisdom</th>
          <th scope="col">Charisma</th>
        </tr>
      </thead>-->

      <thead>
        <tr>
          <th scope="col">Ability</th>
          <th scope="col">Score</th>
          <th scope="col">Modifier</th>
        </tr>
      </thead>

      <tbody>
        <tr>
            <th>Strength</th>
            <td><input class="form-contol" v-model=stats.strength /></td>
            <td> {{strengthMod}} </td>
        </tr>
      </tbody>

      <tbody>
        <tr>
            <th>Dexterity</th>
            <td><input class="form-contol" v-model=stats.dexterity /></td>
            <td>{{dexterityMod}}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
            <th>Constitution</th>
            <td><input class="form-contol" v-model=stats.constitution /></td>
            <td>{{constitutionMod}}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
            <th>Intelligence</th>
            <td><input class="form-contol" v-model=stats.intelligence /></td>
            <td>{{intelligenceMod}}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
            <th>Wisdom</th>
            <td><input class="form-contol" v-model=stats.wisdom /></td>
            <td>{{wisdomMod}}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
            <th>Charisma</th>
            <td><input class="form-contol" v-model=stats.charisma /></td>
            <td>{{charismaMod}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "characterSheetVertical",
  data() {
    return {
      stats: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
      }
    }
  },
  computed: {
    strengthMod() {
        return Math.floor((this.stats.strength - 10) /2);
    },
    dexterityMod() {
        return Math.floor((this.stats.dexterity - 10) /2);
    },
    constitutionMod() {
        return Math.floor((this.stats.constitution - 10) /2);
    },
    intelligenceMod() {
        return Math.floor((this.stats.intelligence - 10) /2);
    },
    wisdomMod() {
        return Math.floor((this.stats.wisdom - 10) /2);
    },
    charismaMod() {
        return Math.floor((this.stats.charisma - 10) /2);
    },
  }
};
</script>
