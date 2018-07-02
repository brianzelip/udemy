<template lang="pug">
  section.col-6.mx-auto.border.rounded
    .p2.bg-silver.rounded-top
      h1.h3.m0.center What is 12+3?
    .p2.rounded-bottom
      ul.list-reset.mt2.flex.flex-wrap
        li.col-6.flex.flex-center.mb2
          button.mx-auto.h2.btn.btn-primary 45
        li.col-6.flex.flex-center.mb2
          button.mx-auto.h2.btn.btn-primary 65
        li.col-6.flex.flex-center
          button.mx-auto.h2.btn.btn-primary 3
        li.col-6.flex.flex-center
          button.mx-auto.h2.btn.btn-primary 67
</template>

<script>
export default {
  data() {
    return {};
  }
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
