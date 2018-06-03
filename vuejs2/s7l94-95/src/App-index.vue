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
        '94': { title: 'Root component', url: 'root-component.html' },
        '95': {
          title: 'Creating a component',
          url: 'creating-a-component.html'
        }
      }
    };
  }
};
</script>
