<template>
  <div class="character-sheet">
    <table class="table table-striped table-hover">

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
          <td><input type="number" min="0" max="30" class="form-contol" oninput="validity.valid||(value='');" v-model=stats.strength /></td>
          <td> {{  strengthMod  }} </td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th>Dexterity</th>
          <td><input type="number" min="0" max="30" class="form-contol" oninput="validity.valid||(value='');" v-model=stats.dexterity /></td>
          <td>{{  dexterityMod  }}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th>Constitution</th>
          <td><input type="number" min="0" max="30" class="form-contol" oninput="validity.valid||(value='');" v-model=stats.constitution /></td>
          <td>{{  constitutionMod  }}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th>Intelligence</th>
          <td><input type="number" min="0" max="30" class="form-contol" oninput="validity.valid||(value='');" v-model=stats.intelligence /></td>
          <td>{{  intelligenceMod  }}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th>Wisdom</th>
          <td><input type="number" min="0" max="30" class="form-contol" oninput="validity.valid||(value='');" v-model=stats.wisdom /></td>
          <td>{{  wisdomMod  }}</td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th>Charisma</th>
          <td><input type="number" min="0" max="30" class="form-contol" oninput="validity.valid||(value='');" v-model=stats.charisma /></td>
          <td>{{  charismaMod  }}</td>
        </tr>
      </tbody>
    </table>

    <Radar :chart-data="chartData" :chart-options="chartOptions" />

  </div>
</template>

<script>
import { Radar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, RadialLinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, RadialLinearScale, PointElement, LineElement)

export default {
  name: "characterSheetVertical",
  data() {
    return {
      stats: {
        strength: 18,
        dexterity: 16,
        constitution: 14,
        intelligence: 12,
        wisdom: 10,
        charisma: 8
      },
      chartOptions: {
        scales: {
          r: {
            min: -5,
            max: 30
          }
        }
      }
    }
  },
  computed: {
    strengthMod() {
      return Math.floor((this.stats.strength - 10) / 2);
    },
    dexterityMod() {
      return Math.floor((this.stats.dexterity - 10) / 2);
    },
    constitutionMod() {
      return Math.floor((this.stats.constitution - 10) / 2);
    },
    intelligenceMod() {
      return Math.floor((this.stats.intelligence - 10) / 2);
    },
    wisdomMod() {
      return Math.floor((this.stats.wisdom - 10) / 2);
    },
    charismaMod() {
      return Math.floor((this.stats.charisma - 10) / 2);
    },
    chartData() {
      return {
        labels: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
        datasets: [{
          label: 'Ability Scores',
          backgroundColor: '#f87979',
          data: [this.stats.strength, this.stats.dexterity, this.stats.constitution, this.stats.intelligence, this.stats.wisdom, this.stats.charisma]
        },
        {
          label: 'Modifiers',
          backgroundColor: '#000000',
          data: [this.strengthMod, this.dexterityMod, this.constitutionMod, this.intelligenceMod, this.wisdomMod, this.charismaMod]
        }]
      }
    }
  },
  components: {
    Radar
  },

};
</script>

<style scoped>
  .character-sheet {
    display: flex;
    flex-direction: row;
  }
</style>