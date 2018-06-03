<template>
  <main>
    <h1>{{ title }}</h1>
    <ol>
      <li v-for="work in works" :key="work">
        <a :href="work.url">{{ work.title }}</a>
      </li>
    </ol>
  </main>
</template>
<script>
export default {
  data: function() {
    return {
      title:
        'Workspace for Section 7 Lecture 94 - Root Component, and Lecture 95 - Creating a Component',
      works: {
        root: {
          title: 'Use root component',
          url: 'root-component.html'
        },
        global: {
          title: 'Use global component',
          url: 'global-component.html'
        },
        local: {
          title: 'Use local component',
          url: 'local-component.html'
        }
      }
    };
  }
};
</script>
