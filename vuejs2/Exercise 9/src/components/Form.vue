<template lang="pug">
  form(class="border p-4")
    .form-group.row
      label(for="firstName" class="col-sm-2 col-form-label") First name
      .col-sm-10
        input(
          type="text"
          class="form-control"
          id="firstName"
          v-model="firstName"
          placeholder="First name")
    .form-group.row
      label(for="lastName" class="col-sm-2 col-form-label") Last name
      .col-sm-10
        input(
          type="text"
          class="form-control"
          id="lastName"
          v-model="lastName"
          placeholder="Last name")
    .form-group.row
      label(for="email" class="col-sm-2 col-form-label") Email
      .col-sm-10
        input(
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Email")
    .form-group.row
      label(for="password" class="col-sm-2 col-form-label") Password
      .col-sm-10
        input(
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Password")
    fieldset(class="form-group")
      .row
        legend(class="col-form-label col-sm-2 pt-0") Store in database?
        .col-sm-10
          .form-check.form-check-inline
            input(
              class="form-check-input"
              type="radio"
              name="database"
              id="databaseRadiosYes"
              v-model="databaseRadiosYes"
              value="Yes"
              checked
              )
            label(
              class="form-check-label" for="gridRadios1") Yes
          .form-check.form-check-inline
            input(
              class="form-check-input"
              type="radio"
              name="database"
              id="databaseRadiosNo"
              v-model="databaseRadiosNo"
              value="No")
            label(class="form-check-label" for="gridRadios2") No
    .form-group.row
      .col-sm-10
        button(type="submit" class="btn btn-primary") Submit
    <!-- Exercise 1 -->
    <!-- Create a Signup Form where you retrieve the following Information -->
    <!-- Full Name (First Name + Last Name) -->
    <!-- Mail -->
    <!-- Password -->
    <!-- Store Data? Yes/No -->

    <!-- Exercise 2 -->
    <!-- Only display the Form if it has NOT been submitted -->
    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

    <!-- Exercise 3 -->
    <!-- Edit the Example from above and create a custom "Full Name" Control -->
    <!-- which still holds the First Name and Last Name Input Field -->
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      databaseRadiosYes: '',
      databaseRadiosNo: ''
    };
  }
};
</script>
