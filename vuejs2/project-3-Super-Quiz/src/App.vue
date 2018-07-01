<template lang="pug">
  main.container
    h1.center The Super Quiz
    hr
    app-question

</template>

<script>
import Question from './components/Question.vue';

export default {
  data() {
    return {};
  },
  components: {
    appQuestion: Question
  }
};
</script>

