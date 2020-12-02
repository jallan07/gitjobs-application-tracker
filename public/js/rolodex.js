$(document).ready(() => {
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on('submit', '#contact-form', handleContactFormSubmit);
  $(document).on('click', '.delete-contact', handleDeleteButtonPress);
});
