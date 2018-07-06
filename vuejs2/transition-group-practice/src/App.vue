<template lang="pug">
  main.container
    h1 This is the list
    label(for="list") Enter new name: 
    input(id="list" type="text" v-model="newName")
    button(@click="addName" type="button") add name
    transition-group(
      tag="ul"
      name="list-complete"
      appear
      )
      li(v-for="(name, i) in names" :key="name" @click="rmName(i)" class="list-complete-item") {{name}}
</template>

<script>
import Hello from './components/Hello.vue';

export default {
  data() {
    return {
      names: ['Sally', 'LeShawn', 'Mike'],
      newName: ''
    };
  },
  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
    rmName(index) {
      this.names.splice(index, 1);
    }
  }
};
</script>

<style>
.container {
  max-width: 30rem;
  margin: 0 auto;
}
.move {
  transition: transform 1s;
}
.list-complete-item {
  transition: all 1s;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
