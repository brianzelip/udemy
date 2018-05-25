* can't use curly braces (to render data) inside html attribute values, instead you have to bind the attribute (to some data in the vue instance -- this allows you to "bind or pass dynamic data to html attributes"), ie:

  ```html
  <!-- NO -->
  <p>{{ msg }} <a href="{{ link }}">go to web page</a>
  ```

  ```html
  <!-- YES -->
  <p>{{ msg }} <a v-bind:href="link">go to web page</a>
  ```
