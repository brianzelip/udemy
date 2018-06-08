<template lang="pug">
  .row.justify-content-center
    .col-6
      .form-group
        label(for="") {{ msg }}
        textarea.form-control(rows="3")
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello'
    };
  }
};
</script>

