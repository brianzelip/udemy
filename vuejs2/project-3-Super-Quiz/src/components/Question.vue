<template lang="pug">
  section.col-6.mx-auto.border.rounded
    .p2.bg-silver.rounded-top
      h1.h3.m0.center {{ qData.question }}
    .p2.rounded-bottom
      ul.list-reset.mt2.flex.flex-wrap
        li.col-6.flex.flex-center.mb2(v-for="choice in qData.ranChoices")
          button.mx-auto.h2.btn.btn-primary {{ choice }}
</template>

<script>
export default {
  data() {
    return {};
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
