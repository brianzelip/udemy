<template lang="pug">
  .card
    .card-header
      h4 Your Data
    .card-body
      p First Name: {{ firstName }}
      p Last Name: {{ lastName }}
      p Mail: {{ email }}
      p Password: {{ password }}
      p Store in Database?: {{ database }}
</template>

<script>
import { formBus } from '../main';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      database: ''
    };
  },
  created() {
    formBus.$on('firstNameWasChanged', firstName => {
      this.firstName = firstName;
    });
    formBus.$on('lastNameWasChanged', lastName => {
      this.lastName = lastName;
    });
    formBus.$on('emailWasChanged', email => {
      this.email = email;
    });
    formBus.$on('passwordWasChanged', password => {
      this.password = password;
    });
    formBus.$on('databaseWasChanged', database => {
      this.database = database;
    });
  }
};
</script>
