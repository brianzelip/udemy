<template lang="pug">
  main.container
    h1.center The Super Quiz
    hr
    app-question(v-show="!answered" :qData="qData()")
    app-answer(v-show="answered")

</template>

<script>
import Question from './components/Question.vue';
import Answer from './components/Answer.vue';

export default {
  data() {
    return {
      answered: false
    };
  },
  methods: {
    ranNum(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
      // via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
    },
    qData() {
      const min = 1;
      const max = 10;
      const val1 = this.ranNum(min, max);
      const val2 = this.ranNum(min, max);
      const operator = val1 > val2 ? '-' : '+';
      const question = `What is ${val1} ${operator} ${val2}?`;
      const answer = operator === '-' ? val1 - val2 : val1 + val2;
      const choices = [
        answer,
        answer + this.ranNum(1, 5),
        answer - this.ranNum(1, 5),
        answer - this.ranNum(1, answer)
      ];
      const ranChoices = [];
      for (let i = choices.length - 1; i >= 0; i--) {
        let ranIndex = this.ranNum(0, choices.length - 1);
        ranChoices.push(choices[ranIndex]);
        choices.splice(ranIndex, 1);
      }
      return {
        val1,
        val2,
        operator,
        answer,
        question,
        choices,
        ranChoices
      };
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
};
</script>

