<template lang="pug">
  section.col-6.mx-auto.border.rounded.bg-aqua
    .box
      h1.mt0.purple You are correct 🎉
      p.h2.bold.purple {{ aData.val1 }} {{ aData.operator }} {{ aData.val2 }} = {{ aData.answer }}
      button.btn.btn-primary Play again
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['aData']
};
</script>

<style scoped>
section {
  height: 13rem;
}
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
