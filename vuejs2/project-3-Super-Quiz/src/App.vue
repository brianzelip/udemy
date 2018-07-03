<template lang="pug">
  main.container
    transition(
      appear
      enter-active-class="animated fadeInDown"
    )
      h1.center The Super Quiz
    hr
    transition(
      mode="out-in"
      name="flip"
    )
      // transition(
      //   mode="out-in"
      //   enter-active-class="animated flipInY"
      //   leave-active-class="animated flipOutY"
      // )
      app-question(v-if="!answered" :qData="qData()" key="question")
      app-answer(v-if="answered" :aData="aData" key="answer")
</template>

<script>
import { questionBus } from '../app.js';
import Question from './components/Question.vue';
import Answer from './components/Answer.vue';

export default {
  data() {
    return {
      answered: false,
      aData: {}
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
  },
  created() {
    const vm = this;
    questionBus.$on('questionAnswered', qData => {
      vm.answered = true;
      vm.aData = {
        val1: qData.val1,
        val2: qData.val2,
        operator: qData.operator,
        answer: qData.answer
      };
    });
    questionBus.$on('restarted', () => {
      vm.answered = false;
    });
  }
};
</script>

<style>
.flip-enter-active {
  animation: flip-in-x 0.2s ease-out;
}
.flip-leave-active {
  animation: flip-out-x 0.2s ease-out;
}
@keyframes flip-out-y {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
@keyframes flip-in-y {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@keyframes flip-out-x {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
}
@keyframes flip-in-x {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
</style>
