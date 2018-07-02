<template lang="pug">
  section.col-6.mx-auto.border.rounded.bg-aqua
    .box
      h1.mt0.purple That's correct! 🎉
      button.btn.btn-primary Play again
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
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
