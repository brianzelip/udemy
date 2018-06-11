<template lang="pug">
  header.mb-4
    h1 Quotes Added
    .progress
      .progress-bar(
        role="progressbar"
        :style="{width: `${quotesProgress.numQuotes * 10}%`}"
        :aria-valuenow="quotesProgress.numQuotes"
        aria-valuemin="0"
        aria-valuemax="10"
      ) {{ quotesProgress.innerHTML }}
</template>

<script>
export default {
  props: {
    quotesProgress: {
      type: Object,
      required: true
    }
  }
};
</script>
