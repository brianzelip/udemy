- can't use curly braces (to render data) inside html attribute values, instead you have to bind the attribute (to some data in the vue instance -- this allows you to "bind or pass dynamic data to html attributes"), ie:

  ```html
  <!-- NO -->
  <p>{{ msg }} <a href="{{ link }}">go to web page</a>
  ```

  ```html
  <!-- YES -->
  <p>{{ msg }} <a v-bind:href="link">go to web page</a>
  ```

```html
<!-- set `disabled` dynamically -->
<template>
  <button :disabled="reachedMaxQuotes">Add Quote</button>
</template>

<script>
  export default {
    props: {
      reachedMaxQuotes: {
        type: Boolean,
        required: true
      }
    }
  }
</script>
```

- Insight into how to use `slots`

See the 3:20 mark in https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5975206?start=198

"I simply want to have a slot, because the quote content should come from outside, so that the thing [parent] passing in the content, is the thing deciding how it should look like."
