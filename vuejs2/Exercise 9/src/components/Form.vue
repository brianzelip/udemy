<template lang="pug">
  // .card
  //   .card-header
  //     h4 Your Data
  //   .card-body
  //     p Full Name:
  //     p Mail:
  //     p Password:
  //     p Store in Database?:
  form
    .form-group
      label(for="firstName") First name
      input(type="text" placeholder="Enter first name").form-control#firstName
    .form-group
      label(for="lastName") Last name
      input(type="text" placeholder="Enter last name").form-control#lastName
    .form-group
      label(for="email") Email address
      input(type="email" placeholder="Enter email").form-control#email
    .form-group
      label(for="exampleInputPassword1") Password
      input(type="password" placeholder="Password").form-control#exampleInputPassword1
    .form-check
      input(type="checkbox" class="form-check-input" id="exampleCheck1")
      label(class="form-check-label" for="exampleCheck1") Check me out
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
