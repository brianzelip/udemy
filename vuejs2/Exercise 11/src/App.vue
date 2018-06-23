<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters &amp; Mixins</h1>
        <label for="text1">Enter text: </label>
        <input type="text" id="text1" v-model="text">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Challenge</th>
              <th scope="col">Filter</th>
              <th scope="col">Computed Property</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>text</td>
              <td>{{ text }}</td>
              <td>{{ text }}</td>
            </tr>
            <tr>
              <td>text reversed</td>
              <td>{{ text | reverse }}</td>
              <td>{{ reverseText }}</td>
            </tr>
            <tr>
              <td>text word count</td>
              <td>{{ text | wordCount }}</td>
              <td>{{ wordCountText }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  filters: {
    reverse(value) {
      return value
        .split('')
        .reverse()
        .join('');
    }
  },
  computed: {
    reverseText() {
      return this.text
        .split('')
        .reverse()
        .join('');
    },
    wordCountText() {
      if (this.text === '') return '';
      const count = this.text.length;
      return `${this.text} (${count})`;
    }
  }
};
</script>

<style>
</style>
