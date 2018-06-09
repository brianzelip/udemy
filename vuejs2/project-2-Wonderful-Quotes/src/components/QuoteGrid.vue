<template lang="pug">
  .row
    appQuote(v-for="quote in quotes") {{ quote }}

</template>

<script>
import appQuote from './Quote.vue';

export default {
  props: {
    quotes: Array
  },
  components: { appQuote }
};
</script>

