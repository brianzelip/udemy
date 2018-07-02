<template lang="pug">
  main.container
    h1.center The Super Quiz
    hr
    app-question
    app-answer

</template>

<script>
import Question from './components/Question.vue';
import Answer from './components/Answer.vue';

export default {
  data() {
    return {};
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
};
</script>

