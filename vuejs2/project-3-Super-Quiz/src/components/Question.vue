<template lang="pug">
  section.col-6.mx-auto.border.rounded
    .p2.bg-silver.rounded-top
      h1.h3.m0.center {{ qData.question }}
    .p2.rounded-bottom
      ul.list-reset.mt2.flex.flex-wrap
        li.col-6.flex.flex-center(
          v-for="(choice, index) in qData.ranChoices"
          :class="[index < 2 ? 'mb2' : '']"
        )
          button.mx-auto.h2.btn.btn-primary(
            type="button"
            :value="choice"
            @click="checkAnswer($event)") {{ choice }}
</template>

<script>
import { questionBus } from '../../app.js';

export default {
  data() {
    return {};
  },
  methods: {
    checkAnswer(e) {
      e.srcElement.value === this.qData.answer.toString()
        ? questionBus.$emit('questionAnswered', this.qData)
        : alert('Wrong answer, try again!');
    }
  },
  props: ['qData']
};
</script>

<style scoped>
section {
  height: 13rem;
}
button {
  min-width: 5rem;
}
</style>
