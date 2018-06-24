<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Filters &amp; Mixins</h1>
        <label for="text1">Enter text for Filter and Computed Property: </label>
        <input type="text" id="text1" v-model="text">
        <label for="text2" style="padding-left: 2rem;">Enter text for Mixin: </label>
        <input type="text" id="text2" v-model="mixinText">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Challenge</th>
              <th scope="col">Filter</th>
              <th scope="col">Computed Property</th>
              <th scope="col">Mixin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>text</td>
              <td>{{ text }}</td>
              <td>{{ text }}</td>
              <td>{{ mixinText }}</td>
            </tr>
            <tr>
              <td>text reversed</td>
              <td>{{ text | reverse }}</td>
              <td>{{ reverseText }}</td>
              <td>{{ reverseMixin }}</td>
            </tr>
            <tr>
              <td>text word count</td>
              <td>{{ text | wordCount }}</td>
              <td>{{ wordCountText }}</td>
              <td>{{ wordCountMixin }}</td>
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
import { textMixin } from './textMixin.js';

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
  methods: {
    updateMixinText() {
      // mixinText = this.text;
      console.log('updateMixinText!!');
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
    },
    sendMixinText() {
      textMixin.mixinText = this.text;
      return textMixin.mixinText;
    }
  },
  mixins: [textMixin]
};
</script>

<style>
</style>
