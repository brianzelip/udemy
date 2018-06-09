<template lang="pug">
  .col-sm-6.col-md-4.c0l-lg-3
    .card.quote
      .card-body
        slot

</template>

<script>
</script>

<style>
.quote {
  font-family: 'Arizonia', cursive;
  font-size: 2rem;
  cursor: pointer;
  background-color: azure;
}
.quote:hover {
  background-color: lightskyblue;
}
</style>

